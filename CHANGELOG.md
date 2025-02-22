# xlog

## 0.14.0

### Minor Changes

- a950bc6: Support Android FCM notification.
- d6c1404: Display notifications separately
- e974ede: Support walletconnectv2.
- b62080e: UX improvements and some bug fixes.

### Patch Changes

- b5dfe8b: Fixed style issues in comment box.
- b5dfe8b: Fixed styles issue in ImageGallery component.
- 7a8bbdf: Fixed styles issue in PostDetails page on Android device.
- b5dfe8b: Fixed compatibility issues with wc2
- dabf7e8: Fixed some bugs with wc2.
- 8b6891e: Navigate to home page after disconnected.

## 0.13.4

### Patch Changes

- ab98186: Test sentry.

## 0.13.3

### Patch Changes

- d45153f: Send a test error to Sentry.
- c65193e: fix parese update info err.

## 0.13.2

### Patch Changes

- 1298685: Test Sentry.

## 0.13.1

### Patch Changes

- 4fee69b: Remove the dist and release fields from Sentry initialization.

## 0.13.0

### Minor Changes

- e0c5434: New build for Sentry.

## 0.12.1

### Patch Changes

- e23f3df: Upload sourcemaps after updates published.

## 0.12.0

### Minor Changes

- 0f0c398: Added a button for Sentry testing.

### Patch Changes

- c0fc0b0: Added more information to sentry.

## 0.11.1

### Patch Changes

- 825c8b3: Support account deletion.

## 0.11.0

### Minor Changes

- fc9b21c: - Get environment variables correctly.

### Patch Changes

- 1c40b14: Solved the theme changing problem.
- 2774d0e: - Added Dev menu in settings page
  - Optimized the skeleton loading of post detail page
  - Fixed some bugs

## 0.10.2

### Patch Changes

- a1022e2: Some UI Improvements.
- 87b1935: Disabled sentry if not set DSN.
- 1528ae0: Fixed storage issues that can not restore value correctly.

## 0.10.1

### Patch Changes

- 61e03c0: Larger font.
- 61e03c0: Auto-upcasing disabled.
- 5958a4f: Added notification's entrance in bottom tab
- cd1abf4: Improve drawer styles and open the drawer when the avatar is pressed.
- 40f639d: Some UI improvements.
- 61e03c0: Auto-closing the Login page when the connection is successful.
- 865cf28: Expanded the hit slop size.

## 0.10.0

### Minor Changes

- 9ddf0bb: Added UserInfo page.
- 4b02490: Push notifications.

### Patch Changes

- 4c8a7d5: Closing the global loading view after timeout.

## 0.9.1

### Patch Changes

- 0782e12: For testing.

## 0.9.0

### Minor Changes

- 51124d5: Bump version.

### Patch Changes

- 892d44a: Display version correctly.
- 1040038: Ignoring the patch version.

## 0.8.1

### Patch Changes

- 74f9cff: Made some modifications to the copy.
- 007f0fe: Added Login page.
- f4dba26: Added Following tabs list.

## 0.8.0

### Minor Changes

- 2249bf4: Bump minor version.

## 0.7.0

### Minor Changes

- bac3901: Following the system color scheme correctly.
- 668c310: Support providing feedback on article issues.

### Patch Changes

- 8047ef1: Open the post details page via universal links.
- 677e318: Solved the universal link issue.
- 87a1f70: Opening Drawer conveniently.
- 6f1231a: Display the date time of feed items correctly.
- 2632cf0: solved the crash problem when close the connecting modal.
- 40f10fc: Configure Sentry.

## 0.6.6

### Patch Changes

- 677e318: Solved the universal link issue.

## 0.6.5

### Patch Changes

- 677e318: Solved the universal link issue.

## 0.6.4

### Patch Changes

- 677e318: Solved the universal link issue.

## 0.6.3

### Patch Changes

- 677e318: Solved the universal link issue.

## 0.6.2

### Patch Changes

- 677e318: Solved the universal link issue.

## 0.6.1

### Patch Changes

- 677e318: Solved the universal link issue.

## 0.6.0

### Minor Changes

- 0584747: Support to comment.
- 15ee396: support to universal links.

## 0.5.0

### Minor Changes

- 1e061e0: - 更好用的文章详情页
  - 支持保存图片到相册
  - 签名授权后每次交互不再需要签名
  - 提醒进行签名设置
  - 优化了一些用户体验
  - 解决了一些 Bug

### Patch Changes

- c7464b4: Performed minor code style tweaks.
- 747b885: Solved the crash issue on Android.
- e05e10b: 🚀 support to display post content only.
- 2471d51: - UI issues fixed.
  - Open drawer via avatar button.
  - Support to follow the system color scheme.
- 38cb225: Replace the webview url.
- a4df6c1: Resolved the crash issue on the notification page..
- a3589da: summary the image on feedlist
- 0e6a217: enable content loader animation on Android.
- fa5f025: UX improvements.
- 9299d45: support to browse comments.

## 0.4.0

### Minor Changes

- e51fbd5: 🚀 Complete the basic dashboard information display.

### Patch Changes

- eaa2b3f: fix: Resolve the issue of the animation stuttering.
- e6d20a3: - Change i18n-js to i18next.
  - Hide the profile pages header.
  - Fallback to key when the target i18n value is null
  - Completed the pages, posts, comments pages.
  - Modify the CI.
- b85acff: fix: close the drawer after disconnect.

## 0.3.0

### Minor Changes

- e82a4a1: support to set hot interval.

## 0.2.0

### Minor Changes

- aa7b055: - Added more themes.
  - Supported dark/light mode.
  - Displayed user info in the drawer menu.
  - Made some UX improvements.
  - Fixed some bugs.
- 67730af: - Connect to the wallet and sign in.
  - Integrate the @crossbell tolls.
  - Support to the ConnectWallet V2 in advance.
- 3432478: support to set hot interval.
- 67730af: Support to sign in.

### Patch Changes

- 89ba825: Fixed the status bar style error
- 3fa0ed5: 🐛 Resolved the query issue in the hot tab.

## 0.1.0

### Minor Changes

- cc1daa3: ## Features

  - Feed page

    - Post details page
    - Navigation
    - i18n
    - CI/EAS

  - Develop the web3 API integration for fetching blog data
    - Set up the @crossbell/indexer for fetching data from the blockchain
    - Implement the API call for fetching the list of blog posts
    - Implement the API call for fetching the details of a specific blog post
  - Integrate data fetching with the feed list and post detail views

    - Display the fetched blog posts in the feed list view
    - Display the fetched post details in the post detail view

  - Configured @Walletconnect v1, currently able to complete wallet connections (temporarily does not support sign in).
  - Support @Walletconnect v2 (expected to switch in June).

  ## Infra

  - Unit test
  - 🚀 Display the user information in the feed list.
  - Configured support for iOS/Android dev-client and Expo EAS builds.

  ## Bug Fixes

  - Some development workflow optimizations.
  - Some code optimizations.
  - Resolved some bugs and adjusted some style issues.

## 0.1.0

### Minor Changes

- 3280d18: - Feed page
  - Post details page
  - Navigation
  - i18n
  - CI/EAS
- 17ee6cb: ## Features

  - Develop the web3 API integration for fetching blog data
    - Set up the @crossbell/indexer for fetching data from the blockchain
    - Implement the API call for fetching the list of blog posts
    - Implement the API call for fetching the details of a specific blog post
  - Integrate data fetching with the feed list and post detail views
    - Display the fetched blog posts in the feed list view
    - Display the fetched post details in the post detail view

  ## Infra

  - Unit test

- 413fc75: 🚀 Display the user information in the feed list.
- 4c23c10: - Configured @Walletconnect v1, currently able to complete wallet connections (temporarily does not support sign in).
  - Support @Walletconnect v2 (expected to switch in June).
  - Configured support for iOS/Android dev-client and Expo EAS builds.
  - Some development workflow optimizations.
  - Some code optimizations.
  - Resolved some bugs and adjusted some style issues.
