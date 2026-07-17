# Playwright JavaScript Automation Framework

## Overview

This project is a web automation framework developed using Playwright with JavaScript for end-to-end application testing.

The framework follows the Page Object Model (POM) design pattern and supports scalable automation for functional testing, regression testing, cross-browser testing, reporting, and CI/CD execution.

---

## Technology Stack

* JavaScript
* Playwright
* Node.js
* npm
* GitHub Actions
* HTML Reports

---

## Framework Features

* Page Object Model (POM) implementation
* End-to-end web application automation
* Cross-browser testing support

  * Chromium
  * Firefox
  * WebKit
* Stable locator strategy using:

  * Role selectors
  * Text selectors
  * CSS selectors
  * XPath
* Auto-waiting and synchronization handling
* Test data management
* Screenshot capture on failure
* Trace viewer support
* HTML test reporting
* CI/CD integration using GitHub Actions

---

## Framework Architecture

```
playwright-javascript-framework

├── pages
│   ├── LoginPage.js
│   ├── ProductsPage.js
│   └── CheckoutPage.js
│
├── tests
│   ├── login.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
│
├── utils
│   └── testData.js
│
├── playwright.config.js
├── package.json
└── .github
    └── workflows
        └── playwright.yml
```

---

## Design Pattern

### Page Object Model (POM)

The framework uses Page Object Model to separate:

* Test scenarios
* Page locators
* Business actions
* Reusable methods

Benefits:

* Improved maintainability
* Code reusability
* Easier UI change management

---

## Prerequisites

Install the following:

* Node.js
* npm
* Git

Verify installation:

```
node -version

npm -version
```

---

## Installation

Clone repository:

```
git clone <repository-url>
```

Navigate to project folder:

```
cd playwright-javascript-framework
```

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

---

## Test Execution

Run all tests:

```
npx playwright test
```

Run a specific test:

```
npx playwright test login.spec.js
```

Run tests in headed mode:

```
npx playwright test --headed
```

---

## Test Reports

Generate and view Playwright HTML report:

```
npx playwright show-report
```

Reports provide:

* Test execution status
* Failure details
* Screenshots
* Trace information

---

## CI/CD Integration

The framework is integrated with GitHub Actions.

Pipeline execution:

```
Code Push

    |

GitHub Actions Trigger

    |

Install Dependencies

    |

Install Playwright Browsers

    |

Execute Tests

    |

Generate Reports
```

---

## Future Enhancements

Planned improvements:

* Allure reporting integration
* Docker execution support
* Cloud browser execution
* Test management tool integration
* API and database validation integration

---

## Author

**Periyasamy Muthu**

Senior SDET | Automation Test Engineer

LinkedIn:
https://www.linkedin.com/in/periyasamymuthu
