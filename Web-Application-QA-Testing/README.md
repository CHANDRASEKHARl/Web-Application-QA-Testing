# Web Application QA Testing Project

A manual QA testing portfolio project built around a small client-side web application. The application supports registration, login, a protected dashboard, profile updates, validation messages, and browser `localStorage` persistence.

## Project structure

```text
Web-Application-QA-Testing/
|-- Application/              # HTML, CSS, and JavaScript application
|-- Test-Cases/               # Test scenarios and detailed test cases
|-- Bug-Reports/              # Verified defect reports and report template
|-- Screenshots/              # Evidence captured during execution
|-- Test-Summary/             # Test summary and regression checklist
`-- README.md
```

## Run the application

No build step or package installation is required.

1. Open `Application/index.html` in a modern browser.
2. Register an account using a password with at least 8 characters, one uppercase letter, one lowercase letter, and one number.
3. Log in and exercise the dashboard and profile flows.

You can also run a small local server from the `Application` folder:

```powershell
cd Application
npx serve .
```

The demo stores user data under `qaDemoUser` and its authentication state under `qaDemoAuthenticated` in browser local storage. Clear this site's local storage in browser developer tools to start a completely fresh run.

## QA workflow

1. Read [Test Scenarios](Test-Cases/Test-Scenarios.md) to understand the intended coverage.
2. Execute the cases in [Test Cases](Test-Cases/Test-Cases.md), recording the observed result and status without changing the expected result.
3. Add a report from [Bug Report Template](Bug-Reports/BUG-TEMPLATE.md) only when an actual defect is observed.
4. Save supporting evidence in `Screenshots/` using the naming guide in its README.
5. Update [Test Summary Report](Test-Summary/Test-Summary-Report.md) using the real execution totals.
