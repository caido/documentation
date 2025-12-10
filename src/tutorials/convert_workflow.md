# Using Match & Replace Against Feature Flags

In this tutorial, you will learn how to configure Match & Replace rules to gain access to features intended for admin users in an intentionally vulnerable application from Caido's Web Security Labs.

Many applications implement feature flag services to hide or display elements and conduct A/B testing for upcoming features.

Typically, access to these additional features is determined by Boolean values, user permission levels, or subscription tiers. However, when access checks are only performed client-side, they can be easily bypassed by creating Match & Replace rules to modify the response before it reaches the client.

## Match & Replace Lab Walkthrough

The Match & Replace Lab displays different user-interface components based on a user's permission role: either `basic` or `admin`.

1. With your proxy settings enabled, navigate to [https://labs.cai.do/matchAndReplace.php](https://labs.cai.do/matchAndReplace.php) in your browser.
2. Within the corresponding response is a `user` object and `checkUserRole()` function. If `(user.role === "admin")`:

- The `displayAdminUI()` function will execute and append an administrative panel to the page.
- The `checkFeatureFlags()` function will parse the `user.featureFlags` property array and append additional components to the user-interface.

::: code-group
```js [user]
        let user = { 
            name: "john", 
            role: "basic", 
            featureFlags: [] // Update this array to enable/disable features
        };
```

```js [displayAdminUI()]
        // Display admin UI elements
        function displayAdminUI() {
            const adminContainer = document.createElement('div');
            adminContainer.id = 'admin-container';
            adminContainer.className = 'container';
            adminContainer.style.marginTop = '20px';
            adminContainer.style.backgroundColor = 'var(--card-bg)';
            adminContainer.style.border = '1px solid #333';

            const heading = document.createElement('h2');
            heading.textContent = 'Admin Controls';

            const adminButton = document.createElement('button');
            adminButton.textContent = 'Do admin action';
            adminButton.style.padding = '8px 16px';
            adminButton.style.backgroundColor = 'var(--button-bg)';
            adminButton.style.color = 'var(--text)';
            adminButton.style.border = 'none';
            adminButton.style.borderRadius = '4px';
            adminButton.style.cursor = 'pointer';

            adminButton.addEventListener('click', function() {
                fetch("/superSecretAdminStuff.php").then(a => a.json()).then(data => {
                    alert(data.message);
                });
            });

            adminContainer.appendChild(heading);
            adminContainer.appendChild(adminButton);
            document.body.appendChild(adminContainer);
        }
```

```js [checkUserRole()]
        // Check if role is admin and update feature flags
        function checkUserRole() {
            if (user.role === "admin") {
                displayAdminUI();
            }
            
            displayUserInfo();
            checkFeatureFlags();
        }
```

```js [checkFeatureFlags()]
        // Check feature flags and activate features
        function checkFeatureFlags() {
            // Check for bouncy ball feature
            if (user.featureFlags.includes('bouncy-ball')) {
                createBouncyBall();
            }

            // Check for sparkle background feature
            if (user.featureFlags.includes('sparkle-background')) {
                enableSparkleBackground();
            }
        }

        // Create and show bouncy ball
        function createBouncyBall() {
            const ball = document.createElement('div');
            ball.className = 'bouncy-ball';

            // Random starting position
            ball.style.left = Math.random() * 80 + 10 + '%';
            ball.style.top = Math.random() * 50 + 25 + '%';

            document.body.appendChild(ball);
        }

        // Enable sparkle background
        function enableSparkleBackground() {
            document.body.classList.add('sparkle-bg');

            // Create sparkles
            setInterval(createSparkle, 300);
        }

        // Create individual sparkle
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';

            // Random position, size and color
            const size = Math.random() * 5 + 2;
            sparkle.style.width = size + 'px';
            sparkle.style.height = size + 'px';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';

            const colors = ['var(--accent)', '#FFC0CB', '#ADD8E6', '#90EE90', 'var(--text)'];
            sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];

            document.body.appendChild(sparkle);

            // Fade out and remove
            setTimeout(() => {
                sparkle.style.opacity = '0';
                sparkle.style.transition = 'opacity 1s';
                setTimeout(() => {
                    document.body.removeChild(sparkle);
                }, 1000);
            }, 1000);
        }
```
:::

### Accessing the Administrative Panel

To display the administrative panel:

1. Navigate to the Match & Replace interface and **click** on the `+ New Rule` button.

::: tip
Click on the <code><Icon icon="fas fa-pencil" /></code> button to rename the rule to a name that quickly identifies the rule's purpose such as "Change Role: basic to admin".
:::

2. Select `Response Body` from the `Section` drop-down menu and `String` from the `Matcher` drop-down menu.
3. Type in `basic` in the `Matcher` input field and `admin` in the `Replacer` input field.
4. Next, **click** on the `Intercept` checkbox to apply the modification to all proxied responses.
5. **Click** on the <code><Icon icon="fas fa-save" /> Update</code> button to add the rule to the Default Collection.
6. Expand the Default Collection by **clicking** on the <code><Icon icon="fas fa-chevron-right" /></code> button attached to it and **click** on the rule's associated checkbox to enable it.

<img alt="Creating a the role change rule." src="/_images/admin_panel_rule.png" center>

7. With your proxy settings enabled, reload [https://labs.cai.do/matchAndReplace.php](https://labs.cai.do/matchAndReplace.php) in your browser.

<img alt="The admin panel." src="/_images/lab_admin_panel.png" center>

Since the rule automatically changed `role` from `"basic"` to `"admin"` in the response before it reached the browser, the conditional check is satisfied and `displayAdminUI()` is executed, rendering the administrative panel in the user-interface.

### Accessing the Additional Features

To access the additional user-interface features that are only intended for admin users:

1. Copy `featureFlags: []` from the response body.

::: warning NOTE
When copying values to match against from requests or responses, ensure to [view their raw representation](/guides/request_response_modes.md) to ensure correct formatting.
:::

2. Create another rule in the Match & Replace interface that targets the `Request Body`.
3. Select `String` from the `Matcher` drop-down menu and paste `featureFlags: []` in the input field.
4. In the `Replacer` input field, type in `featureFlags: ['bouncy-ball', 'sparkle-background']`.
5. **Click** on the `Intercept` checkbox, the <code><Icon icon="fas fa-save" /> Update</code> button, and the rule's associated checkbox in the Default Collection to add and enable the rule.

<img alt="Creating a the feature flag rule." src="/_images/feature_flag_rule.png" center>

6. With your proxy settings enabled, reload [https://labs.cai.do/matchAndReplace.php](https://labs.cai.do/matchAndReplace.php) in your browser.

<img alt="The additional user-interface features." src="/_images/lab_admin_features.png" center>

In combination with the previous rule, since the rule automatically added the features to the array in the response before it reached the browser, when `checkFeatureFlags()` is executed, `if (user.featureFlags.includes('bouncy-ball'))` and `if (user.featureFlags.includes('sparkle-background'))` is satisfied and the `createBouncyBall()` and `enableSparkleBackground()` functions are executed.

## Additional Modifications

::: code-group
```txt [Matcher: String]
            // Fade out and remove
            setTimeout(() => {
                sparkle.style.opacity = '0';
                sparkle.style.transition = 'opacity 1s';
                setTimeout(() => {
                    document.body.removeChild(sparkle);
                }, 1000);
            }, 1000);
```

```txt [Replacer: String]
// Leave empty or add this comment
```
:::

<img alt="Creating a rule to persist the sparkles." src="/_images/permanent_sparkles_rule.png" center>

<img alt="Permanent sparkles." src="/_images/lab_permanent_sparkles.png" center>
