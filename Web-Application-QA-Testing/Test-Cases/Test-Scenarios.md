# Test Scenarios

These scenarios describe the high-level behavior to be checked. Detailed cases are mapped in [Test Cases](Test-Cases.md).

| ID | Module | Scenario | Related Test Cases |
| --- | --- | --- | --- |
| TS-001 | Registration | Verify a user can register with valid details. | TC-001, TC-002 |
| TS-002 | Registration | Verify invalid email input is rejected. | TC-003, TC-004 |
| TS-003 | Registration | Verify required registration fields are validated. | TC-005, TC-006 |
| TS-004 | Registration | Verify password rules are enforced. | TC-007, TC-008, TC-009 |
| TS-005 | Registration | Verify confirm-password validation. | TC-010 |
| TS-006 | Registration | Verify duplicate registration is prevented. | TC-011 |
| TS-007 | Login | Verify login with valid credentials. | TC-012, TC-013 |
| TS-008 | Login | Verify invalid credentials are rejected. | TC-014, TC-015 |
| TS-009 | Login | Verify required login fields are validated. | TC-016 |
| TS-010 | Login | Verify invalid login email is rejected. | TC-017 |
| TS-011 | Dashboard | Verify the dashboard loads after successful login. | TC-018, TC-019 |
| TS-012 | Dashboard | Verify dashboard navigation. | TC-020, TC-021 |
| TS-013 | Logout | Verify logout ends the active session. | TC-022, TC-023 |
| TS-014 | Profile | Verify profile details can be updated. | TC-024, TC-025, TC-026 |
| TS-015 | Profile | Verify required profile fields are validated. | TC-027, TC-028, TC-029 |
| TS-016 | Profile | Verify phone-number validation. | TC-030, TC-031, TC-032 |
| TS-017 | Access Control | Verify protected-page access is controlled. | TC-033, TC-034 |
| TS-018 | Data Persistence | Verify registered and profile data persists after refresh. | TC-035, TC-036 |
| TS-019 | Validation Feedback | Verify validation feedback changes after corrected input. | TC-037, TC-038 |
| TS-020 | Responsive UI | Verify the main flows remain usable on desktop and mobile. | TC-039, TC-040 |
