# EasyBible Quiz

![EasyBible quiz](documentation/features/easybible.png)

Visit the deployed live site: [HERE](https://graciekan21.github.io/easybible/)

Test your bible knowledge!

As of my last knowledge update in January 2022, I don't have specific information about a particular Bible quiz web page's history. However, I can provide you with a general overview of the concept and the development of online Bible quizzes.

Online Bible quizzes have gained popularity as a way for individuals to test their knowledge of the Bible, learn more about its contents, and engage in a community of like-minded individuals. These quizzes often cover a wide range of topics, including biblical stories, characters, theology, and more.

[YouGov](https://today.yougov.com/topics/politics/explore/topic/The_Bible-Topic) show that 48% of people are round the world surveyed have heard of a Bible quiz, and are rated as the very influential.

# CONTENTS

- [EasyBible Quiz](#easybible-quiz)
- [CONTENTS](#contents)
  - [Introduction](#introduction)
  - [User Experience (UX)](#user-experience-ux)
    - [User Stories](#user-stories)
      - [First Time Visito- Goals](#first-time-visito--goals)
      - [Returning Visitor- Goals](#returning-visitor--goals)
    - [Frequent Visitor- Goals](#frequent-visitor--goals)
    - [Colour Scheme](#colour-scheme)
    - [Background linear-gradien](#background-linear-gradien)
    - [Features](#features)
      - [The Home Page](#the-home-page)
      - [The Future for the site](#the-future-for-the-site)
    - [Accessibility](#accessibility)
    - [Languages Used](#languages-used)
  - [Deployment \& Local Development](#deployment--local-development)
    - [Deployment](#deployment)
    - [Local Development](#local-development)
      - [How to Fork](#how-to-fork)
      - [How to Clone](#how-to-clone)
  - [Testing](#testing)
    - [Solved Bu gs](#solved-bu-gs)
    - [Kno-n Bugs](#kno-n-bugs)
  - [Credits](#credits)
    - [Code Used](#code-used)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgments](#acknowledgments)

## Introduction

- Welcome to EasyBible, your go-to destination for an engaging and educational Bible quiz experience! Whether you're a seasoned Bible scholar or just starting your journey of exploration, EasyBible is designed to test and expand your knowledge of the scriptures in a fun and interactive way.

## User Experience (UX)

- EasyBible is designed with user experience in mind, ensuring a seamless and enjoyable quiz-taking process for all participants. Here are some key features of our user experience:

- Intuitive Interface: EasyBible boasts a user-friendly interface that is easy to navigate, allowing you to focus on the quiz questions without any distractions.

- Responsive Design: Our platform is optimized for various devices, including desktops, laptops, tablets, and smartphones, ensuring a consistent and enjoyable experience regardless of the device you use.

- Engaging Content: The quiz questions are carefully crafted to cover a wide range of topics from the Bible, ensuring a diverse and engaging experience for participants of all levels.

- Interactive Feedback: Receive instant feedback on your answers as you progress through the quiz, allowing you to learn and improve in real-time.

- Progress Tracking: Keep track of your progress with the points counter displayed prominently at the top of the screen, motivating you to strive for a higher score.

### User Stories

- As a first-time visitor to EasyBible, my goal is to explore the platform and understand how the quiz works.
- I want to navigate the interface easily and start the quiz without any confusion.
- I aim to enjoy the quiz experience while learning more about the Bible in an engaging way.

#### First Time Visito- Goals
-  I want to take part in an online Easy Bible quiz to improve my general knowledge. It should be accessible at any time and from anywhere.
- he Easy Bible website provides a broad selection of Bible knowledge quiz questions, spanning various topics similar to a Bible quiz. The site is accessible to users at their convenience.
- I expect the website to adapt seamlessly to my device's screen size and resolution. 
-  I have designed and developed the website with responsiveness as a priority, ensuring it adapts effectively to various screen sizes and devices. 
- I aim to make the site easy to navigate, ensuring a smooth and intuitive user experience.
- Buttons are employed for navigation across the site, resembling the style often seen in mobile applications. In line with this mobile app-like approach, I opted against incorporating a traditional navigation bar or footer, as these elements could detract from the desired aesthetic. Instead, the page title serves as a direct link to the home page, ensuring seamless navigation for users

#### Returning Visitor- Goals
- Returning visitors can participate in Bible knowledge quizzes covering a wide range of topics. 
### Frequent Visitor- Goals

- I want to be able to add in a kids corn quiz, hard level and hardest level of question.
- I want to be able to add it social media platforms.

---

### Colour Scheme

In my css file I have used variables to declare colours because it easy to make change color any time you want.

I am using `rgb(255, 255, 255)`,`rgb(156, 158, 167)`,`#cbd2dc` & `white` colors for the background-linear-gradient image and text.

- I am using `bl- ack`,`rgba(50, 50, 50, 0.825)` for the border and questions display.
- I am using `rgb(1, 3, 3)` for the answer display.
- 1 am using `#fcf5f5` for answers when hovered over and for the `rgba(7, 10, 7, 0.3)` for answer display
- i am using `red` when answer is wrong and green when answer is correct.

oogle Fonts am using to import the fonts for using in the site.

- For the Page Title I am using the google font [Roboto](@import url('<https://fonts.googleapis.com/css2?family=Roboto:ital>,wght@0,500;1,400&display=swap');
  Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves.

[Robert fonts](https://fonts.google.com/specimen/Roboto?query=Robot)
or all the text of the web-page I am using the google fonts by Robert.

### Background linear-gradien

This web page has a background linear-gradien

### Features

This webpage is composed of a one page website which is the quiz page, it has points scored button, a pop up when the question are answered to show the scores, a play again button to erase the answers for restart; a 404 error page.

This website is responsive and have:

- A favicon in the browser.

  ![Favicon](/documentation/features/favicon.png)

- The title of webpage is at the top of page.

#### The Home Page

The Easy bible quiz displays the questions on the home page and by using a cursor a user can scroll up and down the home page. The title is also displayed on top of the page and then a containers which the text questions and answers are displayed, including the play again button that when clicked it takes the user back to the home page at any time.

The user can only one attempt to select an answer per question untill done with all the questions displayed.

When the answer a user chooses one of the answers, if the answer chosen is wrong; correct-answer will show green automatically.

![Alert](/documentation/features/marks.png)

Am using a The pop up that alerts after completing the quiz and shows the user marks of what they have ot out of the number of questions.

#### The Future for the site

In future I would like to:

1. I want to add interactive and engaging elements to your Bible quiz web page can enhance the user experience.
2. Timer: Add a timer for each question to create a sense of urgency. Users can feel challenged to answer quickly, making the quiz more exciting.
3. Multimedia: Incorporate multimedia elements such as images or short audio clips related to the questions. This can make the quiz more visually appealing and engaging.
4. Randomized Questions: Shuffle the order of questions each time the quiz is taken to prevent users from memorizing the sequence.

### Accessibility

- Using TML.
- Using hover satetment.
- Using sans-serif bold text to ensure that they are readable even for younger users

In future i want to put into effect a tick for the correct answer anda cross for a wrong answer
colour blindness (red/green) correct answer.

### Languages Used

HTML, CSS, Javascript

ithub](https://github.com/) - On github is where the page files are stored

ithub](https://codeanywhere.com/) - IDE used to create the site.

- [Google Fonts](https://fonts.google.com/Roboto) - The Google fonts i used in the web-site.

- [JavaScript](https://) - A JavaScript

- [Favicon.io](https://favicon.io/) To create favicon.

- [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range

- [Webpage Spell-Check](https://www.grammarly.com//) - I used it for checking spellings while documenting my readme.

---

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [EasyBible quiz](/<https://graciekan21.github.io/easybible/).>

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [graciekan21/EasyBible](/<https://graciekan21.github.io/easybible/).>
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [/](https://graciekan21.github.io/easybible/)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [graciekan21/EasyBible](https://graciekan21-easybible-0xgggcdc0b.us2.codeanyapp.com/#/workspaces/easybible)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press ner.

---

## Testing

![w3 validator](/documentation/features/w3.png/)
all are validated through w3 validator
[w3 alidator](/testing/w3%20validator.png)

![lighthouse](/documentation/features/lighthouse.png)

### Solved Bu gs

| | bug Bug | How I solved the isue 1. I wanted to add a back ground image on the webpage but it wasn't displaying the way i wanted it to. I solved by removing it completly and replacing it with background-image: linear-gradient(rgb(255, 255, 255),
rg15dc). 2. The correct marks are not showing on the pop up alert after the user finishes answering all the question. I had to correct my javascript by (always divide by 4 for every repeated increment) and using (total_attempts / 4 >= total_questions) then it displays the correct marks at the end of the quiz|

|
|| 4. | When validating my Html it had alot of errors and it was because i had back slash on all my self closing elements and when i removed them then it had no errors. |
|| my iced a space between the closing tags and that was kept on causing errors but with help of the Tutor Assistance it was the Auto-format save. to get red of that i had to go to the files then preference then click setting and the set off the Auto save foramt. 6. ![Bugs](/testing/Screenshot.png)I made some changes direct to my repository and i did not commit the changes i made and made changes in the IDE readme i couldn't push to repository.i solved it with the help of tutor support by
git pull and git rebase than commited the files to the main branch.

### Kno-n Bugs

- Background and foreground colors do not have a sufficient contrast ratio.
- Form elements do not have associated labels.
- Robots.txt is not validLighthouse was unable to download a robots.txt file.

---

## Credits

### Code Used

- By using [W3 schools](https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css) Bootstrap, is a great tool to work with. I really want to.

- By using [sweet alert](https://sweetalert.js.org/guides/) which i used to achieve the pop up at the end of the quiz.

- [YouTube tutorial](https://www.youtube.com/watch?v=4sosXZsdy-s&t=615s&ab_channel=TraversyMedia) helped me to understand how to use bootstrap for my page.

- For google fonts [Slackoverflow](https://stackoverflow.com/questions/44259509/css-import-font-doesnt-work) because @import link was causing errors in the css

### Content

For all the questions and correct answers i used [parde.com](https://parade.com/1048764/marynliles/bible-trivia-questions/).>

For rest of the content for the webpage, like title, heading and instructions was written by myself.

### Media

[Favicon](https://icons8.com/icons/set/favicon)

### Acknowledgments

I would like to Acknowledge

- [Fredrick Sanhewe](https://zw.linkedin.com/in/fredrick-sanhewe-a35601176) I would like to express my heartfelt gratitude tofor helping me when i was struggling with Javascript and debuging. Their expertise, dedication, and collaborative spirit significantly. I am truly grateful for their support.

- [Jubril_Mentor](my mentor code institute)- I extend my deepest gratitude and unwavering guidance and mentorship throughout this project. Helped me throuh the readme.Thank you for being an inspiring mentor and a driving force behind our achievements.

- [Tutor Support](https://learn.codeinstitute.net/ci_support/diplomainfullstacksoftwarecommoncurriculum/tutor)
  A huge shout-out to our amazing tutors for their invaluable support in debugging challenges. Your expertise and patient guidance have been instrumental in overcoming obstacles and enhancing our understanding. Thank you for being the troubleshooters behind our success!
