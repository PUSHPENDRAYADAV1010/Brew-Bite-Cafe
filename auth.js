// ======================================================
// BREW & BITE CAFE
// CUSTOMER AUTHENTICATION + ACCOUNT SYSTEM
// ======================================================

let isLoginMode = false;
let currentLoggedUser = null;

// ======================================================
// AUTH ELEMENTS
// ======================================================

const authView = document.getElementById("auth-view");

const accountView = document.getElementById("account-view");

const authForm = document.getElementById("auth-form");

const authMessage = document.getElementById("auth-message");

const authSubmit = document.getElementById("auth-submit");

const authToggle = document.getElementById("auth-toggle");

const fullNameGroup = document.getElementById("full-name-group");

const fullNameInput = document.getElementById("auth-full-name");

const emailInput = document.getElementById("auth-email");

const passwordInput = document.getElementById("auth-password");

// ======================================================
// ACCOUNT ELEMENTS
// ======================================================

const accountName = document.getElementById("account-name");

const accountEmail = document.getElementById("account-email");

const profileAvatar = document.getElementById("profile-avatar");

const displayFullName = document.getElementById("display-full-name");

const displayEmail = document.getElementById("display-email");

const displayPhone = document.getElementById("display-phone");

const displayRole = document.getElementById("display-role");

const ordersCount = document.getElementById("orders-count");

const favoritesCount = document.getElementById("favorites-count");

const reviewsCount = document.getElementById("reviews-count");

const recentOrders = document.getElementById("recent-orders");

// ======================================================
// MODAL ELEMENTS
// ======================================================

const profileModal = document.getElementById("profile-modal");

const profileForm = document.getElementById("profile-form");

const profileName = document.getElementById("profile-name");

const profilePhone = document.getElementById("profile-phone");

const profileEmail = document.getElementById("profile-email");

const profileSave = document.getElementById("profile-save");

const profileMessage = document.getElementById("profile-message");

const editProfileButton = document.getElementById("edit-profile-button");

const closeProfileModal = document.getElementById("close-profile-modal");

const profileModalOverlay = document.querySelector(".profile-modal-overlay");

const logoutButton = document.getElementById("logout-button");

// ======================================================
// MESSAGE HELPERS
// ======================================================

function showAuthMessage(message, isError = false) {
  if (!authMessage) return;

  authMessage.textContent = message;

  authMessage.style.color = isError ? "#dc2626" : "";
}

function showProfileMessage(message, isError = false) {
  if (!profileMessage) return;

  profileMessage.textContent = message;

  profileMessage.style.color = isError ? "#dc2626" : "#16a34a";
}

// ======================================================
// LOGIN / SIGNUP MODE
// ======================================================

function updateAuthMode() {
  if (isLoginMode) {
    fullNameGroup.hidden = true;

    fullNameInput.required = false;

    authSubmit.textContent = "Login";

    authToggle.textContent = "Need an account? Sign up";
  } else {
    fullNameGroup.hidden = false;

    fullNameInput.required = true;

    authSubmit.textContent = "Create Account";

    authToggle.textContent = "Already have an account? Login";
  }
}

// ======================================================
// TOGGLE LOGIN / SIGNUP
// ======================================================

authToggle.addEventListener("click", () => {
  isLoginMode = !isLoginMode;

  updateAuthMode();

  authForm.reset();

  if (isLoginMode) {
    showAuthMessage("Login to your Brew & Bite account.");
  } else {
    showAuthMessage("Create your Brew & Bite customer account.");
  }
});

// ======================================================
// AUTH FORM
// ======================================================

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  const password = passwordInput.value;

  const fullName = fullNameInput.value.trim();

  // ------------------------------
  // VALIDATION
  // ------------------------------

  if (!email || !password) {
    showAuthMessage("Please enter email and password.", true);

    return;
  }

  if (!isLoginMode && !fullName) {
    showAuthMessage("Please enter your full name.", true);

    return;
  }

  if (password.length < 6) {
    showAuthMessage("Password must contain at least 6 characters.", true);

    return;
  }

  authSubmit.disabled = true;

  authSubmit.textContent = isLoginMode
    ? "Logging in..."
    : "Creating account...";

  try {
    // ==================================================
    // LOGIN
    // ==================================================

    if (isLoginMode) {
      const { data, error } =
        await window.supabaseClient.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        throw error;
      }

      if (data.user) {
        await showAccount(data.user);
      }
    }

    // ==================================================
    // SIGNUP
    // ==================================================
    else {
      const { data, error } = await window.supabaseClient.auth.signUp({
        email,

        password,

        options: {
          data: {
            full_name: fullName,
          },

          emailRedirectTo: window.location.origin + window.location.pathname,
        },
      });

      if (error) {
        throw error;
      }

      authForm.reset();

      if (!data.session) {
        showAuthMessage(
          "Account created! 🎉 Please verify your email before logging in.",
        );
      } else {
        showAuthMessage("Account created successfully! ☕");

        if (data.user) {
          await showAccount(data.user);
        }
      }
    }
  } catch (error) {
    console.error("AUTH ERROR:", error);

    showAuthMessage(error.message || "Something went wrong.", true);
  } finally {
    authSubmit.disabled = false;

    updateAuthMode();
  }
});

// ======================================================
// SHOW ACCOUNT
// ======================================================

async function showAccount(user) {
  if (!user) return;

  currentLoggedUser = user;

  // Hide authentication screen

  authView.hidden = true;

  // Show account dashboard

  accountView.hidden = false;

  await loadCustomerProfile(user);

  await loadAccountStats(user.id);

  await loadRecentOrders(user.id);
}

// ======================================================
// LOAD CUSTOMER PROFILE
// ======================================================

async function loadCustomerProfile(user) {
  try {
    const { data, error } = await window.supabaseClient
      .from("profiles")
      .select("full_name, phone, role, avatar_url")
      .eq("id", user.id)
      .single();

    if (error) {
      console.error("PROFILE LOAD ERROR:", error);

      return;
    }

    const name =
      data.full_name || user.user_metadata?.full_name || "Cafe Customer";

    const email = user.email || "No email";

    // ==================================================
    // HERO
    // ==================================================

    accountName.textContent = name;

    accountEmail.textContent = email;

    // ==================================================
    // AVATAR
    // ==================================================

    const initials = getInitials(name);

    profileAvatar.textContent = initials;

    // ==================================================
    // DETAILS
    // ==================================================

    displayFullName.textContent = name;

    displayEmail.textContent = email;

    displayPhone.textContent = data.phone || "Not added";

    displayRole.textContent = capitalizeRole(data.role || "customer");

    // ==================================================
    // EDIT FORM
    // ==================================================

    profileName.value = name;

    profilePhone.value = data.phone || "";

    profileEmail.value = email;
  } catch (error) {
    console.error("PROFILE ERROR:", error);
  }
}

// ======================================================
// INITIALS
// ======================================================

function getInitials(name) {
  const parts = name.trim().split(/\s+/);

  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// ======================================================
// ROLE
// ======================================================

function capitalizeRole(role) {
  return role.charAt(0).toUpperCase() + role.slice(1);
}

// ======================================================
// ACCOUNT STATS
// ======================================================

async function loadAccountStats(userId) {
  try {
    // ------------------------------
    // ORDERS
    // ------------------------------

    const { count: orderCount, error: orderError } = await window.supabaseClient
      .from("orders")
      .select("id", {
        count: "exact",
        head: true,
      })
      .eq("customer_id", userId);

    if (!orderError) {
      ordersCount.textContent = orderCount || 0;
    }

    // ------------------------------
    // FAVORITES
    // ------------------------------

    const { count: favoriteCount, error: favoriteError } =
      await window.supabaseClient
        .from("favorites")
        .select("id", {
          count: "exact",
          head: true,
        })
        .eq("user_id", userId);

    if (!favoriteError) {
      favoritesCount.textContent = favoriteCount || 0;
    }

    // ------------------------------
    // REVIEWS
    // ------------------------------

    const { count: reviewCount, error: reviewError } =
      await window.supabaseClient
        .from("reviews")
        .select("id", {
          count: "exact",
          head: true,
        })
        .eq("customer_id", userId);

    if (!reviewError) {
      reviewsCount.textContent = reviewCount || 0;
    }
  } catch (error) {
    console.error("STATS ERROR:", error);
  }
}

// ======================================================
// RECENT ORDERS
// ======================================================

async function loadRecentOrders(userId) {
  try {
    const { data, error } = await window.supabaseClient
      .from("orders")
      .select("id, order_number, status, total, created_at")
      .eq("customer_id", userId)
      .order("created_at", {
        ascending: false,
      })
      .limit(3);

    if (error) {
      console.error("ORDERS LOAD ERROR:", error);

      return;
    }

    if (!data || data.length === 0) {
      recentOrders.innerHTML = `

                <div class="empty-orders">

                    <div class="empty-order-icon">
                        ☕
                    </div>

                    <strong>
                        No orders yet
                    </strong>

                    <p>
                        Your delicious Brew & Bite orders
                        will appear here.
                    </p>

                </div>

            `;

      return;
    }

    recentOrders.innerHTML = data
      .map((order) => {
        const date = new Date(order.created_at).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });

        const status = order.status || "pending";

        return `

                        <div class="order-row">

                            <div class="order-number">
                                <span>
                                    Order
                                </span>

                                <strong>
                                    #${order.order_number}
                                </strong>
                            </div>


                            <div class="order-date">
                                ${date}
                            </div>


                            <span
                                class="order-status status-${status}"
                            >
                                ${capitalizeRole(status)}
                            </span>


                            <strong class="order-total">
                                ₹${Number(order.total || 0).toFixed(2)}
                            </strong>

                        </div>

                    `;
      })
      .join("");
  } catch (error) {
    console.error("RECENT ORDERS ERROR:", error);
  }
}

// ======================================================
// EDIT PROFILE MODAL
// ======================================================

editProfileButton.addEventListener("click", () => {
  profileModal.hidden = false;

  document.body.classList.add("modal-open");

  profileName.focus();
});

function closeProfileEditor() {
  profileModal.hidden = true;

  document.body.classList.remove("modal-open");

  showProfileMessage("");
}

closeProfileModal.addEventListener("click", closeProfileEditor);

profileModalOverlay.addEventListener("click", closeProfileEditor);

// ======================================================
// SAVE PROFILE
// ======================================================

profileForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!currentLoggedUser) {
    return;
  }

  const name = profileName.value.trim();

  const phone = profilePhone.value.trim();

  if (!name) {
    showProfileMessage("Please enter your name.", true);

    return;
  }

  profileSave.disabled = true;

  profileSave.textContent = "Saving...";

  try {
    // ==================================================
    // UPDATE PUBLIC PROFILES TABLE
    // ==================================================

    const { error: profileError } = await window.supabaseClient
      .from("profiles")
      .update({
        full_name: name,

        phone: phone,
      })
      .eq("id", currentLoggedUser.id);

    if (profileError) {
      throw profileError;
    }

    // ==================================================
    // UPDATE AUTH USER METADATA
    // ==================================================

    const { error: authError } = await window.supabaseClient.auth.updateUser({
      data: {
        full_name: name,
      },
    });

    if (authError) {
      console.warn("AUTH METADATA UPDATE:", authError);
    }

    // ==================================================
    // REFRESH ACCOUNT
    // ==================================================

    await loadCustomerProfile(currentLoggedUser);

    showProfileMessage("Profile updated successfully! ✓");

    setTimeout(() => {
      closeProfileEditor();
    }, 900);
  } catch (error) {
    console.error("PROFILE UPDATE ERROR:", error);

    showProfileMessage(error.message || "Unable to update profile.", true);
  } finally {
    profileSave.disabled = false;

    profileSave.textContent = "Save Changes";
  }
});

// ======================================================
// LOGOUT
// ======================================================

logoutButton.addEventListener("click", async () => {
  logoutButton.disabled = true;

  logoutButton.textContent = "Logging out...";

  try {
    const { error } = await window.supabaseClient.auth.signOut();

    if (error) {
      throw error;
    }

    currentLoggedUser = null;

    accountView.hidden = true;

    authView.hidden = false;

    authForm.reset();

    isLoginMode = true;

    updateAuthMode();

    showAuthMessage("You have been logged out successfully. ☕");
  } catch (error) {
    console.error("LOGOUT ERROR:", error);

    alert(error.message || "Unable to logout.");
  } finally {
    logoutButton.disabled = false;

    logoutButton.textContent = "🚪 Logout";
  }
});

// ======================================================
// QUICK ACTIONS
// ======================================================

document.getElementById("account-orders-btn").addEventListener("click", () => {
  document.getElementById("recent-orders").scrollIntoView({
    behavior: "smooth",
  });
});

document
  .getElementById("account-favorites-btn")
  .addEventListener("click", () => {
    showTemporaryMessage("Favorites section is coming next ❤️");
  });

document.getElementById("account-reviews-btn").addEventListener("click", () => {
  showTemporaryMessage("Reviews section is coming next ⭐");
});

// ======================================================
// TEMPORARY MESSAGE
// ======================================================

function showTemporaryMessage(message) {
  const existing = document.querySelector(".account-toast");

  if (existing) {
    existing.remove();
  }

  const toast = document.createElement("div");

  toast.className = "account-toast";

  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);
}

// ======================================================
// CHECK EXISTING LOGIN
// ======================================================

async function checkExistingUser() {
  try {
    const { data, error } = await window.supabaseClient.auth.getUser();

    if (error) {
      console.log("No authenticated user.");

      return;
    }

    if (data?.user) {
      await showAccount(data.user);
    }
  } catch (error) {
    console.error("USER CHECK ERROR:", error);
  }
}

// ======================================================
// AUTH STATE CHANGE
// ======================================================

window.supabaseClient.auth.onAuthStateChange(async (event, session) => {
  console.log("AUTH EVENT:", event);

  if (session?.user && event !== "SIGNED_OUT") {
    await showAccount(session.user);
  }
});

// ======================================================
// INITIALIZE
// ======================================================

updateAuthMode();

checkExistingUser();

console.log("☕ Brew & Bite Account System Loaded");
