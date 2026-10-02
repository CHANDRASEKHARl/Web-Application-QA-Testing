# Test Cases

## Execution Rules

- Record the actual result exactly as observed during execution.
- Use only `PASS`, `FAIL`, `BLOCKED`, or `NOT EXECUTED` as a case status.
- Create a bug report only when the actual result differs from the expected result.
- Clear browser local storage before any case that requires a fresh account.
- Keep screenshots only when they support a real execution result or verified defect.

## Test Case Index

| ID | Module | Test Case | Scenario | Type | Priority | Status |
| --- | --- | --- | --- | --- | --- | --- |
| TC-001 | Registration | Register with valid details | TS-001 | Positive | High | PASS |
| TC-002 | Registration | Register with a valid name containing spaces or an apostrophe | TS-001 | Positive | Medium | PASS |
| TC-003 | Registration | Reject email in incomplete format | TS-002 | Negative | High | PASS |
| TC-004 | Registration | Reject email without an at sign | TS-002 | Negative | High | PASS |
| TC-005 | Registration | Validate empty registration fields | TS-003 | Negative | High | PASS |
| TC-006 | Registration | Validate an empty Full Name field | TS-003 | Negative | High | PASS |
| TC-007 | Registration | Reject a password shorter than 8 characters | TS-004 | Negative | High | PASS |
| TC-008 | Registration | Reject a password without an uppercase letter | TS-004 | Negative | High | PASS |
| TC-009 | Registration | Reject a password without a number | TS-004 | Negative | High | PASS |
| TC-010 | Registration | Validate different password and confirm-password values | TS-005 | Negative | High | PASS |
| TC-011 | Registration | Prevent duplicate email registration | TS-006 | Negative | High | PASS |
| TC-012 | Login | Log in with valid credentials | TS-007 | Positive | High | PASS |
| TC-013 | Login | Log in with uppercase email characters | TS-007 | Positive | Medium | PASS |
| TC-014 | Login | Reject an incorrect password | TS-008 | Negative | High | PASS |
| TC-015 | Login | Reject an unregistered email | TS-008 | Negative | High | PASS |
| TC-016 | Login | Validate empty login fields | TS-009 | Negative | High | PASS |
| TC-017 | Login | Reject an invalid login email format | TS-010 | Negative | High | PASS |
| TC-018 | Dashboard | Display account details after login | TS-011 | Positive | High | PASS |
| TC-019 | Dashboard | Retain dashboard access after refresh | TS-011 | Positive | Medium | PASS |
| TC-020 | Dashboard | Navigate from Dashboard to Profile | TS-012 | Positive | High | PASS |
| TC-021 | Dashboard | Navigate from Profile to Dashboard | TS-012 | Positive | Medium | PASS |
| TC-022 | Logout | End an active user session | TS-013 | Positive | High | PASS |
| TC-023 | Logout | Block direct Dashboard access after logout | TS-013 | Negative | High | PASS |
| TC-024 | Profile | Prefill registered account details | TS-014 | Positive | High | PASS |
| TC-025 | Profile | Save valid profile details | TS-014 | Positive | High | PASS |
| TC-026 | Profile | Retain saved profile details after navigation | TS-014 | Positive | Medium | PASS |
| TC-027 | Profile | Validate an empty Name field | TS-015 | Negative | High | PASS |
| TC-028 | Profile | Validate an empty Email field | TS-015 | Negative | High | PASS |
| TC-029 | Profile | Validate an empty Address field | TS-015 | Negative | High | PASS |
| TC-030 | Profile | Reject alphabetic phone input | TS-016 | Negative | High | PASS |
| TC-031 | Profile | Reject a phone number shorter than seven characters | TS-016 | Negative | High | PASS |
| TC-032 | Profile | Accept a valid phone number with supported symbols | TS-016 | Positive | Medium | PASS |
| TC-033 | Access Control | Block direct Profile access while signed out | TS-017 | Negative | High | PASS |
| TC-034 | Access Control | Block direct Dashboard access with no user data | TS-017 | Negative | High | PASS |
| TC-035 | Data Persistence | Retain a registered account after refresh | TS-018 | Positive | High | PASS |
| TC-036 | Data Persistence | Retain profile data after refresh | TS-018 | Positive | High | PASS |
| TC-037 | Validation Feedback | Clear registration errors after valid correction | TS-019 | Positive | Medium | PASS |
| TC-038 | Validation Feedback | Clear phone validation error after valid correction | TS-019 | Positive | Medium | PASS |
| TC-039 | Responsive UI | Keep Registration usable on desktop and mobile | TS-020 | Positive | Medium | PASS |
| TC-040 | Responsive UI | Keep Dashboard and Profile usable on desktop and mobile | TS-020 | Positive | Medium | PASS |

## Registration

### TC-001 - Register with valid details

Scenario: `TS-001` | Type: Positive | Priority: High | Status: `PASS`

Precondition: The Registration page is open and no account is stored.

Steps:

1. Enter a valid full name and email address.
2. Enter a valid password and matching Confirm Password.
3. Select Register.

Expected Result: Registration succeeds and a success message is displayed.

Actual Result: Registration succeeded and the success message was displayed.

### TC-002 - Register with a valid name containing spaces or an apostrophe

Scenario: `TS-001` | Type: Positive | Priority: Medium | Status: `PASS`

Precondition: The Registration page is open and no account is stored.

Steps:

1. Enter a valid name containing spaces or an apostrophe.
2. Complete the remaining fields with valid values.
3. Select Register.

Expected Result: The valid name is accepted and registration succeeds.

Actual Result: The valid name containing spaces or an apostrophe was accepted and registration succeeded.

### TC-003 - Reject email in incomplete format

Scenario: `TS-002` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The Registration page is open.

Steps:

1. Enter a valid name.
2. Enter `abc@` as the email address.
3. Complete both password fields with matching valid values and select Register.

Expected Result: Registration is blocked and an email-format error is displayed.

Actual Result: Registration was blocked and an email-format validation error was displayed.

### TC-004 - Reject email without an at sign

Scenario: `TS-002` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The Registration page is open.

Steps:

1. Enter a valid name.
2. Enter an email address without an `@` sign.
3. Complete both password fields with matching valid values and select Register.

Expected Result: Registration is blocked and an email-format error is displayed.

Actual Result: Registration was blocked and an email-format validation error was displayed.

### TC-005 - Validate empty registration fields

Scenario: `TS-003` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The Registration page is open.

Steps:

1. Leave all fields empty.
2. Select Register.

Expected Result: Required-field errors are displayed and no account is created.

Actual Result: Required-field validation messages were displayed and no account was created.

### TC-006 - Validate an empty Full Name field

Scenario: `TS-003` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The Registration page is open.

Steps:

1. Leave Full Name empty and complete the remaining fields with valid values.
2. Select Register.

Expected Result: Full Name is marked required and registration is blocked.

Actual Result: Full Name was marked as required and registration was blocked.

### TC-007 - Reject a password shorter than 8 characters

Scenario: `TS-004` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The Registration page is open.

Steps:

1. Enter valid Name and Email values.
2. Enter matching passwords shorter than 8 characters.
3. Select Register.

Expected Result: Registration is blocked and a password-rule error is displayed.

Actual Result: Registration was blocked and a password validation error was displayed.

### TC-008 - Reject a password without an uppercase letter

Scenario: `TS-004` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The Registration page is open.

Steps:

1. Enter valid Name and Email values.
2. Enter matching 8-character passwords with no uppercase letter.
3. Select Register.

Expected Result: Registration is blocked and a password-rule error is displayed.

Actual Result: Registration was blocked and a password-rule validation error was displayed.

### TC-009 - Reject a password without a number

Scenario: `TS-004` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The Registration page is open.

Steps:

1. Enter valid Name and Email values.
2. Enter matching 8-character passwords with no number.
3. Select Register.

Expected Result: Registration is blocked and a password-rule error is displayed.

Actual Result: Registration was blocked and a password-rule validation error was displayed.

### TC-010 - Validate different password and confirm-password values

Scenario: `TS-005` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The Registration page is open.

Steps:

1. Complete Name, Email, and Password with valid values.
2. Enter a different value in Confirm Password.
3. Select Register.

Expected Result: Registration is blocked and a password-mismatch error is displayed.

Actual Result: Registration was blocked and a password-mismatch error was displayed.

### TC-011 - Prevent duplicate email registration

Scenario: `TS-006` | Type: Negative | Priority: High | Status: `PASS`

Precondition: An account is already registered.

Steps:

1. Enter the registered email address and otherwise valid details.
2. Select Register.

Expected Result: Registration is blocked and a duplicate-email message is displayed.

Actual Result: Registration was blocked and a duplicate-email message was displayed.

## Login

### TC-012 - Log in with valid credentials

Scenario: `TS-007` | Type: Positive | Priority: High | Status: `PASS`

Precondition: A registered account exists and the Login page is open.

Steps:

1. Enter the registered email address and correct password.
2. Select Log in.

Expected Result: The user is taken to the Dashboard and sees a login-success message.

Actual Result: Login succeeded, the user was redirected to the Dashboard, and the login-success message was displayed.

### TC-013 - Log in with uppercase email characters

Scenario: `TS-007` | Type: Positive | Priority: Medium | Status: `PASS`

Precondition: A registered account exists and the Login page is open.

Steps:

1. Enter the registered email address using uppercase characters and enter the correct password.
2. Select Log in.

Expected Result: Login succeeds because email matching is case-insensitive.

Actual Result: Login succeeded when the registered email was entered using uppercase characters.

### TC-014 - Reject an incorrect password

Scenario: `TS-008` | Type: Negative | Priority: High | Status: `PASS`

Precondition: A registered account exists and the Login page is open.

Steps:

1. Enter the registered email address and an incorrect password.
2. Select Log in.

Expected Result: Login is blocked and an invalid-credentials message is displayed.

Actual Result: Login was blocked and an invalid-credentials message was displayed.

### TC-015 - Reject an unregistered email

Scenario: `TS-008` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The Login page is open.

Steps:

1. Enter an unregistered valid email address and a valid-format password.
2. Select Log in.

Expected Result: Login is blocked and an invalid-credentials message is displayed.

Actual Result: Login was blocked and an invalid-credentials message was displayed for the unregistered email.

### TC-016 - Validate empty login fields

Scenario: `TS-009` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The Login page is open.

Steps:

1. Leave both fields empty.
2. Select Log in.

Expected Result: Required-field errors are displayed and login is blocked.

Actual Result: Required-field validation messages were displayed and login was blocked.

### TC-017 - Reject an invalid login email format

Scenario: `TS-010` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The Login page is open.

Steps:

1. Enter `user@` as the email address and enter any password.
2. Select Log in.

Expected Result: Login is blocked and an email-format error is displayed.

Actual Result: Login was blocked and an email-format validation error was displayed.

## Dashboard and Logout

### TC-018 - Display account details after login

Scenario: `TS-011` | Type: Positive | Priority: High | Status: `PASS`

Precondition: A registered user has just logged in.

Steps:

1. Observe the Dashboard.

Expected Result: The Dashboard displays the user's welcome name, registered name, and registered email.

Actual Result: The Dashboard displayed the registered user's name and email correctly.

### TC-019 - Retain dashboard access after refresh

Scenario: `TS-011` | Type: Positive | Priority: Medium | Status: `PASS`

Precondition: A user is signed in and on the Dashboard.

Steps:

1. Refresh the browser page.

Expected Result: The Dashboard remains available and still displays the signed-in user's details.

Actual Result: After refreshing the browser, the Dashboard remained available and the user's details were still displayed.

### TC-020 - Navigate from Dashboard to Profile

Scenario: `TS-012` | Type: Positive | Priority: High | Status: `PASS`

Precondition: A user is signed in and on the Dashboard.

Steps:

1. Select the Profile navigation link.

Expected Result: The Profile page opens.

Actual Result: The Profile page opened successfully.

### TC-021 - Navigate from Profile to Dashboard

Scenario: `TS-012` | Type: Positive | Priority: Medium | Status: `PASS`

Precondition: A user is signed in and on the Profile page.

Steps:

1. Select the Dashboard navigation link.

Expected Result: The Dashboard page opens.

Actual Result: The Dashboard page opened successfully.

### TC-022 - End an active user session

Scenario: `TS-013` | Type: Positive | Priority: High | Status: `PASS`

Precondition: A user is signed in.

Steps:

1. Select Log out.

Expected Result: The user is returned to the Login page and the session ends.

Actual Result: The user was returned to the Login page and the session ended after logout.

### TC-023 - Block direct Dashboard access after logout

Scenario: `TS-013` | Type: Negative | Priority: High | Status: `PASS`

Precondition: A user has logged out.

Steps:

1. Enter `dashboard.html` directly in the browser address bar.

Expected Result: Access is denied and the user is redirected to Login.

Actual Result: Direct Dashboard access after logout was denied and the user was redirected to the Login page.

## Profile

### TC-024 - Prefill registered account details

Scenario: `TS-014` | Type: Positive | Priority: High | Status: `PASS`

Precondition: A user is signed in and the Profile page is open.

Steps:

1. Check the Name and Email fields before making changes.

Expected Result: The fields are prefilled with the registered account data.

Actual Result: The Name and Email fields were prefilled with the registered account information.

### TC-025 - Save valid profile details

Scenario: `TS-014` | Type: Positive | Priority: High | Status: `PASS`

Precondition: A user is signed in and the Profile page is open.

Steps:

1. Enter valid Name, Email, Phone, and Address values.
2. Select Save Profile.

Expected Result: The profile saves successfully and a success message is displayed.

Actual Result: The profile was saved successfully and a success message was displayed.

### TC-026 - Retain saved profile details after navigation

Scenario: `TS-014` | Type: Positive | Priority: Medium | Status: `PASS`

Precondition: A profile with saved phone and address details exists.

Steps:

1. Open the Dashboard and return to Profile.

Expected Result: The saved Name, Email, Phone, and Address values persist.

Actual Result: The saved Name, Email, Phone, and Address values persisted after navigating away and returning to Profile.

### TC-027 - Validate an empty Name field

Scenario: `TS-015` | Type: Negative | Priority: High | Status: `PASS`

Precondition: A user is signed in and the Profile page is open.

Steps:

1. Clear the Name field and complete the other fields with valid values.
2. Select Save Profile.

Expected Result: Saving is blocked and Name is marked required.

Actual Result: Saving was blocked and the Name field was marked as required.

### TC-028 - Validate an empty Email field

Scenario: `TS-015` | Type: Negative | Priority: High | Status: `PASS`

Precondition: A user is signed in and the Profile page is open.

Steps:

1. Clear the Email field and complete the other fields with valid values.
2. Select Save Profile.

Expected Result: Saving is blocked and Email is marked required.

Actual Result: Saving was blocked and the Email field was marked as required.

### TC-029 - Validate an empty Address field

Scenario: `TS-015` | Type: Negative | Priority: High | Status: `PASS`

Precondition: A user is signed in and the Profile page is open.

Steps:

1. Clear the Address field and complete the other fields with valid values.
2. Select Save Profile.

Expected Result: Saving is blocked and Address is marked required.

Actual Result: Saving was blocked and the Address field was marked as required.

### TC-030 - Reject alphabetic phone input

Scenario: `TS-016` | Type: Negative | Priority: High | Status: `PASS`

Precondition: A user is signed in and the Profile page is open.

Steps:

1. Enter alphabetic characters only in Phone and complete the remaining fields with valid values.
2. Select Save Profile.

Expected Result: Saving is blocked and a phone-validation error is displayed.

Actual Result: Saving was blocked and a phone-validation error was displayed.

### TC-031 - Reject a phone number shorter than seven characters

Scenario: `TS-016` | Type: Negative | Priority: High | Status: `PASS`

Precondition: A user is signed in and the Profile page is open.

Steps:

1. Enter fewer than seven phone characters and complete the remaining fields with valid values.
2. Select Save Profile.

Expected Result: Saving is blocked and a phone-validation error is displayed.

Actual Result: Saving was blocked and a phone-validation error was displayed for the short phone number.

### TC-032 - Accept a valid phone number with supported symbols

Scenario: `TS-016` | Type: Positive | Priority: Medium | Status: `PASS`

Precondition: A user is signed in and the Profile page is open.

Steps:

1. Enter a phone number containing digits, spaces, parentheses, or `+` and complete the remaining fields with valid values.
2. Select Save Profile.

Expected Result: The valid phone format is accepted and the profile saves.

Actual Result: The valid phone format was accepted and the profile was saved successfully.

## Access Control, Persistence, Feedback, and Responsive UI

### TC-033 - Block direct Profile access while signed out

Scenario: `TS-017` | Type: Negative | Priority: High | Status: `PASS`

Precondition: No user is signed in.

Steps:

1. Enter `profile.html` directly in the browser address bar.

Expected Result: Access is denied and the user is redirected to Login.

Actual Result: Direct Profile access was denied and the user was redirected to the Login page.

### TC-034 - Block direct Dashboard access with no user data

Scenario: `TS-017` | Type: Negative | Priority: High | Status: `PASS`

Precondition: The browser has no registered user data.

Steps:

1. Enter `dashboard.html` directly in the browser address bar.

Expected Result: Access is denied and the user is redirected to Login.

Actual Result: Direct Dashboard access was denied and the user was redirected to the Login page.

### TC-035 - Retain a registered account after refresh

Scenario: `TS-018` | Type: Positive | Priority: High | Status: `PASS`

Precondition: A user has successfully registered.

Steps:

1. Refresh the Login page.
2. Log in with the registered credentials.

Expected Result: The registered account remains available after refresh.

Actual Result: The registered account remained available after refreshing the Login page and login succeeded with the registered credentials.

### TC-036 - Retain profile data after refresh

Scenario: `TS-018` | Type: Positive | Priority: High | Status: `PASS`

Precondition: A user has saved a complete profile.

Steps:

1. Refresh the Profile page.

Expected Result: All saved profile values remain available after refresh.

Actual Result: All saved profile values remained available after refreshing the Profile page.

### TC-037 - Clear registration errors after valid correction

Scenario: `TS-019` | Type: Positive | Priority: Medium | Status: `PASS`

Precondition: The Registration page is open.

Steps:

1. Submit an empty form.
2. Correct every field with valid values and submit the form again.

Expected Result: Previous field errors clear and registration succeeds.

Actual Result: The validation errors cleared after correcting the fields and registration succeeded.

### TC-038 - Clear phone validation error after valid correction

Scenario: `TS-019` | Type: Positive | Priority: Medium | Status: `PASS`

Precondition: The Profile page is open while signed in.

Steps:

1. Submit an invalid phone number.
2. Replace it with a valid phone number and save the profile again.

Expected Result: The phone error clears and the profile saves successfully.

Actual Result: The phone validation error cleared after entering a valid phone number and the profile was saved successfully.

### TC-039 - Keep Registration usable on desktop and mobile

Scenario: `TS-020` | Type: Positive | Priority: Medium | Status: `PASS`

Precondition: The Registration page is open.

Steps:

1. Test the Registration page at a desktop viewport.
2. Test the Registration page at a 375-pixel-wide mobile viewport.

Expected Result: Text, fields, messages, and the Register button remain visible with no horizontal scrolling or overlap.

Actual Result: The application remained visible and usable at desktop and 375-pixel mobile widths without horizontal scrolling or overlapping elements.

### TC-040 - Keep Dashboard and Profile usable on desktop and mobile

Scenario: `TS-020` | Type: Positive | Priority: Medium | Status: `PASS`

Precondition: A user is signed in.

Steps:

1. Test Dashboard and Profile at a desktop viewport.
2. Test Dashboard and Profile at a 375-pixel-wide mobile viewport.

Expected Result: Navigation and form controls remain usable, readable, and unobstructed.

Actual Result: Dashboard and Profile navigation and controls remained usable, readable, and unobstructed at both desktop and 375-pixel mobile widths.
