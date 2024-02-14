# EasyBible - Testing

![EasyBible shown on a variety of screen sizes](documentation/features/easybible.png)

Visit the deployed site: [EasyBible](https://graciekan21.github.io/easybible/)

---

## CONTENTS

- [EasyBible - Testing](#easybible---testing)
  - [CONTENTS](#contents)
  - [AUTOMATED TESTING](#automated-testing)
    - [W3C Validator](#w3c-validator)
    - [JavaScript Validator](#javascript-validator)
    - [Lighthouse](#lighthouse)
    - [Desktop Results](#desktop-results)
    - [Mobile Results](#mobile-results)
  - [MANUAL TESTING](#manual-testing)
    - [Testing User Stories](#testing-user-stories)

Throughout the entire development process, testing was ongoing. I used Chrome Developer Tools to identify and troubleshoot any issues as they arose. During development, I relied on Google Developer Tools to verify functionality and assist with problem-solving when things didn't work as expected.

---

## AUTOMATED TESTING

### W3C Validator

[W3C](https://validator.w3.org/)The HTML on the all page of the website was validated using W3C. Additionally, the CSS was also validated using the same tool.

- [index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgraciekan21.github.io%2Feasybible%2F) - Passed with no error.

- [style.css](https://jigsaw.w3.org/css-validator/validator) - passed with no error.

---

### JavaScript Validator

[jshint](https://jshint.com/) was used to validate the JavaScript.

- [javascript.js]() - Passed.

---

### Lighthouse

I utilized Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices, and SEO of the website.

### Desktop Results

![index.html](/documentation/desktop.png)

### Mobile Results

![Pop up alert](/documentation/pop-up.png)

![quiz-mobile-screen.page](/documentation/quiz-mobile-screen.png)

---

## MANUAL TESTING

### Testing User Stories

`First Time Visitors`

| Goals                                                                                                                                                                                       | How are they achieved?                                                                                                                           |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| I want to take part in an online Easy Bible quiz to improve my general knowledge. It should be accessible at any time and from anywhere.  |The Easy Bible website provides a broad selection of Bible knowledge quiz questions, spanning various topics similar to a Bible quiz. The site is accessible to users at their convenience.
| I expect the website to adapt seamlessly to my device's screen size and resolution.   | I have designed and developed the website with responsiveness as a priority, ensuring it adapts effectively to various screen sizes and devices. |I aim to make the site easy to navigate, ensuring a smooth and intuitive user experience.| Buttons are employed for navigation across the site, resembling the style often seen in mobile applications. In line with this mobile app-like approach, I opted against incorporating a traditional navigation bar or footer, as these elements could detract from the desired aesthetic. Instead, the page title serves as a direct link to the home page, ensuring seamless navigation for users |

`Returning Visitors`

|  Goals | How are they achieved? |
| :--- | :--- |
|Returning visitors can participate in Bible knowledge quizzes covering a wide range of topics. | Users are able to select their own level of difficulty before the game begins. Once they have played they are free to select a different level of difficulty for subsequent games. |


`Frequent Visitors`

| Goals                                                                                                                             | How are they achieved?                                                                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Engage in Bible Knowledge Quizzes: Returning visitors can participate in Bible knowledge quizzes covering a wide range of topics. | Users are able to select their own level of difficulty before the game begins. Once they have played they are free to select a different level of difficulty for subsequent games. |
|                                                                                                                                   

---

### Full Testing

Full testing was performed on the following devices:

* Laptop:
  * Macbook Pro 2021 14 inch screen
* Mobile Devices:
  * iPhone 14 pro.
  * Samsung Galaxy flod.
  * Samung Galaxy s20 ultra.

Each device tested the site using the following browsers:

* Google Chrome
* Safari
* Firefox

Additional testing was conducted by friends and family on various devices and screen sizes. They reported no issues while playing.

`Home Page`
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The play again button | When clicked, it redirects you to the quiz, which serves as the home page. | Clicked play again button | The quiz page resets.| Pass |
| Points  | Display the accumulated points for correct answers during the quiz. | Displays points | pass|
|A pop-up alert modal appears and displays the marks obtained from the quiz. | Pass |


`quiz Page`
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| The play again button | When clicked, it redirects you to the quiz, which serves as the home page. | Clicked play again button | The quiz page resets.| Pass 
|The quiz page .| Answering Bible questions with each question having 4 answers to choose from, with only one being correct.|The chosen answer is displayed, and if it is incorrect, it is highlighted in red. The correct answer is then shown in green. |  pass|
| Buttons for answers| When hovering over buttons with a black background and white text, the buttons should transition to a white background with black text.|  Hover over each button on the page| Each button displayed the correct styling when hovered over.| Pass |


