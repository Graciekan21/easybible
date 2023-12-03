# EasyBible Quiz

![EasyBible quiz shows on a variety of screen sizes](assets/images/favicon/Easy-Bible-Quiz.png)

Visit the deployed site: [EasyBible quiz](https://graciekan21-easybible.github.io/Easybible/)

Test your bible knowledge!

As of my last knowledge update in January 2022, I don't have specific information about a particular Bible quiz web page's history. However, I can provide you with a general overview of the concept and the development of online Bible quizzes.

Online Bible quizzes have gained popularity as a way for individuals to test their knowledge of the Bible, learn more about its contents, and engage in a community of like-minded individuals. These quizzes often cover a wide range of topics, including biblical stories, characters, theology, and more.

[YouGov](https://today.yougov.com/topics/politics/explore/topic/The_Bible-Topic) show that 48% of people are round the world surveyed have heard of a Bible quiz, and are rated as the very influential.

Am inspired by various motivations,
Educational Purpose:

Promoting Bible Knowledge: A primary motivation is to encourage and facilitate the learning of the Bible. Quizzes can cover a range of topics from specific verses to general themes, helping individuals deepen their understanding of the scriptures.
Youth and Sunday School: Bible quizzes are often used as educational tools in youth groups, Sunday school classes, and other educational settings to make learning about the Bible more engaging for younger audiences.
Spiritual Growth:

Personal and Spiritual Development: Creating or participating in Bible quizzes can be a means for individuals to strengthen their faith, reflect on biblical teachings, and engage in personal spiritual growth.
Community Building:

Church Groups and Communities: Bible quizzes can serve as a fun and interactive way to bring members of a church community together. They provide a shared activity that promotes fellowship and discussion around biblical topics.
Online Ministry:

Reaching a Global Audience: With the rise of online platforms, individuals and organizations may create Bible quizzes as a way to reach a global audience, allowing people from different parts of the world to engage in discussions about the Bible, Many more.

![GitHub last commit]()
![GitHub contributors]()
![GitHub language count]()
![GitHub top language]()
![W3C Validation]()

## CONTENTS

- [EasyBible Quiz](#easybible-quiz)
  - [CONTENTS](#contents)
  - [User Experience (UX)](#user-experience-ux)
    - [User Stories](#user-stories)
      - [First Time Visito- Goals](#first-time-visito--goals)
      - [Returning Visitor- Goals](#returning-visitor--goals)
      - [Frequent Visitor- Goals](#frequent-visitor--goals)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Wireframes](#wireframes)
    - [Features](#features)
      - [The Home Page](#the-home-page)
      - [The 404 Error Page](#the-404-error-page)
      - [The 500 Error Page](#the-500-error-page)
      - [Future Implementations](#future-implementations)
    - [Accessibility](#accessibility)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks, Libraries \& Progra-s Used](#frameworks-libraries--progra-s-used)
  - [Deployment \& Local Development](#deployment--local-development)
    - [Deployment](#deployment)
    - [Local Development](#local-development)
    
      - [How to Clone](#how-to-clone)
  - [Testing](#testing)
    - [Solved Bu gs](#solved-bu-gs)
    - [Kno-n Bugs](#kno-n-bugs)
  - [Credits](#credits)
    - [Co-e Used](#co-e-used)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgments](#acknowledgments)

---

![Quiz Columns ](documentation/Easy-Bible-Q.png)

## User Experience (UX)

### User Stories

#### First Time Visito- Goals

- I want to take part in a bible quiz online to test my bible knowledge. I want to be able to do this any time, a-ywhere.
- I want the site to be responsive to my-device.
- I want the site to be easy to navigate.

#### Returning Visitor- Goals

- I want to be able to choose questions in levels from easy, hard and Hardest that thus making it more interactive and making me want to come back again.

#### Frequent Visitor- Goals

- I want to be able to add in a kids corn quiz, hard level and hardest level of question.
- I want to be able to add it social media platforms.

---

## Design

### Colour Scheme

As the pages of the site have a background image (linear-gradient), I want to change the background for photo (image) to look more clear for users.

In my css file I have used variables to declare colours because it easy to make change color any time you want.

- I am using `rgb(109, 125, 134)`,`rgb(156, 158, 167)`,`#cbd2dc` & `white` colors for the background-linear-gradient image and text.
- I am using `#0f1d8620`,`black`,`rgba(10, 10, 92, 0.425)` for the border and questions display.
- I am using `rgb(1, 3, 3)` for the answer display.
- 1 am using `#fcf5f5` for answers when hovered over and for the `rgba(7, 10, 7, 0.3)` for answer display
- i am using `red` when answer is wrong and green when answer is correct.
  ![ Color Scheme](documentation/color-scheme.webp)

### Typography

Google Fonts am using to import the fonts for using in the site.

- For the Page Title I am using the google font [Roboto]('<https://fonts.googleapis.com/css2?family=Open+Sans:ital>,wght@1,300&family=Oswald:wght@200;300&family=Roboto&display=swap').Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves.

![Almendra Font Example](documentation/almendr-.webp)

- For the body of the page I have used the google font [Quicksand](https://fonts.google.com/specimen/Quicksand?preview.text=The%20Quiz%20Arms%20THE%20QUIZ%20ARMS&preview.text_type=custom&query=quicksand). QuickSand is a sans-serif font which has lovely clean lines. I have chosen to use a sans-serif font for the body of the page as studies have found that sans-serif fonts are generally more legible to read on a screen.

### Imagery

This web page has a background linear-gradien

### Wireframes

Wireframes were created for mobile, tablet and desktop using balsamiq.

![Home Page](documentation/wireframes/homewireframe.webp)
![quiz](documentation/wireframes/wireframe.webp)
![points button](documentation/wireframes/scoreswireframe.webp)
![play again button](do/refresh/wireframes)

### Features

This webpage is composed of a one page website which is the quiz page, it has points scored button, a pop up when the question are answered to show the scores, a play again button to erase the answers for restart; a 404 error page & a 500 error page.

This website is responsive and have:

- A favicon in the browser.

  ![favicon](documentation/favicon-imag-.webp)

- The title of webpage is at the top of every page.

#### The Home Page

The Easy bible quiz displays the questions on the home page and by using a cursor a user can scroll up and down the home page. The title is also displayed on top of the page and then a containers which the text questions and answers are displayed, including the play again button that when clicked it takes the user back to the home page at any time.

The user can only one attempt to select an answer per question untill done with all the questions displayed.

When the answer a user chooses one of the answers, if the answer chosen is wrong; correct-answer will show green automatically.

![pop up button](documentation/features/popup.png)

The pop up will appear one second after completing the quiz at the top of the page to show the user marks of what you got out of the number of questions.

#### The 404 Error Page

The 404 error page displays the sites name as a title. This also acts as a link back to the home page. Within the page container there is a sorry message explaining to the user that there has been an error directing them to the page they were looking for. The user is then given a choice of three buttons to redirect them to other pages on the site, the home page, the games page and the high scores page.

![Error page image](documentation/features/404.png)

#### The 500 Error Page

The 500 error page displays the sites names as a title, which also acts as a link back to the home page. Within the container is an error message that tells the user sorry there seems to be an issue retrieving the quiz data. Two buttons for the home page and the high scores page are below. I did not add the play game button here, as a user will been directed to this page if there is an error calling the API.

![500 Error Page](documentation/features/500.png)

#### Future Implementations

In future implementations I would like to:

1. Give users the option to select the amount of questions in their quiz.
2. Look into making the quiz a multiplayer game, so that it could be played by teams, which would make the quiz even more like a pub quiz.
3. Create a back end database to enable me to store scores which would then allow you to see how you scored against other players.
4. Look further into the accessibility for people with colour blindness, perhaps by adding symbols such as a tick or cross next to the answer when they are checked.

### Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been have achie-ed by:

- Using semant-c HTML.
- Using a hover state on all buttons on the site to make it clear to the user if they are hovering over a-button.
- Choosing a sans serif font for the site - these fonts are suitable for people with d-slexia.
- Ensuring that there is a sufficient colour contrast throughout the site.

![contrast button](documentation/contrast-btn.png) ![Contrast button hover](documentation/contrast-btn-hover.png) ![contrast text](documentation/contrast-text.png)

As the site relies on colour to display to the user whether an answer is correct or incorrect, I was interested to see what this would look like for someone with red/green colour blindness. I used the chrome extension [Web Disability Simulator](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) to be able to see what someone with red/green colour blindness would see.

In a future implementation I think it would be a great accessibility feature to also add a symbol such as a tick or cross on the answer button to enable people who are colour blind to also be able to access the quiz easier. Each of the images below have whether they are correct/incorrect in the name. Can you tell which one is which?

![Colour blindness (red/green) correct answer](documentation/rg-colour-blind-correct.png)
![Colour blindness (red/green) incorrect answer](documentation/rg-colour-blind-incorrec.ng)

---

## Technologies Used

### Languages Used

HTML, CSS, Javascript

### Frameworks, Libraries & Progra-s Used

- [Balsamiq](https://balsamiq.com/) - Used to create wire-rames.

- [Git](https://git-scm.com/) - For version c-ntrol.

- [Github](https://github.com/) - To save and store the files for the w-bsite.

- [GitPod](https://gitpod.io/) - IDE used to create th- site.

- [Google Fonts](https://fonts.google.com/) - To import the fonts used on the w-bsite.

- [jQuery](https://jquery.com/) - A JavaScript l-brary.

- [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and s-yling.

- [TinyPNG](https://tinypng.com/) To compress-images

- [Birme](https://www.birme.net/) To resize images and convert to webp -ormat.

- [Favicon.io](https://favicon.io/) To create f-vicon.

- [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of d-vices.

- [Shields.io](https://shields.io/) To add badges to the-README

- [Open Trivia DataBase](https://opentdb.com/) - API used for the trivia que-tions.

- [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) - a google chrome extension to enable you to view JSON as raw data or -arsed.

- [Web Disability Simulator](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) - a google chrome extension that allows you to view your site as people with accessibility needs would -ee it.

- [Webpage Spell-Check](https://chrome.google.com/webstore/detail/webpage-spell-check/mgdhaoimpabdhmacaclbbjddhngchjik/related) - a google chrome extension that allows you to spell check your webpage. Used to check the site and the readme for spelling errs.

---

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [The Quiz Arms](https://kera-cudmore.github.io/TheQuizArms/).

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [kera-cudmore/TheQuizArms](https://github.com/kera-cudmore/TheQuizArms).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [kera-cudmore/TheQuizArms](https://github.com/kera-cudmore/TheQuizArms)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [kera-cudmore/TheQuizArms](https://github.com/kera-cudmore/TheQuizArms)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press ner.

---

## Testing

Please refer to [TESTING.md](TESTING.md) file for all testing carried out.

### Solved Bu gs

|  No |                                                                                                                                                                                                                                                                                                                                                                                                          Bug | How I solved t he isue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --: | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1 |                                                                                                                                                                                                                                                                                  An error was displaying in the console when next was clicked after the first question, stating that results wasn't defined. | Data was defined in the callApi(), so couldn't be accessed as it was in local scope rather than global scope. By defining data globally and then passing the data as a parameter into the getQuestion() in the nextQuestion() sol v ed th is.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   2 |                                                                                                                            The Questions being pulled in from the JSON have HTML entity characters that are not escaped and therefore display incorrectly with symbols in place of the correct characters. ![Characters not escaping correctly in the JSON data](documentation/characters-not-esca ped.webp) | After a lot of research into escaping characters, I came across a post on slack that mentioned using innerHTML rather than innerText. Once I changed the answers to innerHTML the characters are now displaying c o rrect ly.                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   3 |                                                                                                                                                               I have the local storage set up to save the final score as mostRecentScore. However when completing a game and submitting the team name the score added to the high scores section would be the previous score and not the most rece nt score. | After a lot of research to try and find out why this was happening I went over the code again and decided to see if I changed mostRecentScore in the scoreLog to score it would make a difference. By changing this, I have solved the issue and it now pulls the most recent score a chiev ed.                                                                                                                                                                                                                                                                                                                                                                                            |
|   4 |                                                                                                                                                                                              Players were able to select an answer which would then display whether correct or incorrect. However they could still click on the answers which meant they could click all the answers to receive th e points. | I researched a way to disable the buttons and initially found that I could use answer1.disabled = true; This worked, however it added quite a bit of code, as I had to add this for each button. Further research led me to find [this article](https://blog.revillweb.com/jquery-disable-button-disabling-and-enabling-buttons-with-jquery-5e3ffe669ece) which showed how to use jQuery and the class on the buttons to enable and disable them all at the same time. This then allows me to enable the buttons when a new question has been populated and once a selection has been made, the answer buttons are disabled until the user clicks next to advance onto the next questi on. |
|   5 |                                                                                                                                                                                                                                                   There was an issue with the data-correct not always being removed correctly from questions, which meant that incorrect answers were displaying a s correct | I changed the way the data-correct attribute was removed from the answers, by using the same a for loop similar to what was used to add the data-correct attribute. I also changed the for innerText in the for loop to be innerHTML so that it was correctly reading the same as what was displayed on th e butt on.                                                                                                                                                                                                                                                                                                                                                                      |
|   6 | If a user selected an incorrect answer and the correct answer contained HTML entity characters (such as /&#(\d+);/g) the correct button styling would not be applied to the displayCorrectAnswer variable and a error would display in the console. This would then prevent the user from progressing in the quiz as the next button would not display for them to move on.![Bug 6](documentation/bug-6.png) | I adjusted line 161 to use innerHTML rather than innerText, however the issue persisted. I looked for an answer online but struggled to find anything that would help. I then reached out to Bim Williams on Slack who is an alumni on the course and asked to run the problem past him. He suggested adding a function that would decode the HTML entity and then apply that function within line 161. The function takes the HTML entity characters and replaces them with the correct characters. I will be researching this topic further in my spare time to gain a deeper understandi ng of it.                                                                                      |

### Kno-n Bugs

- When viewing on screens that use touch rather than a cursor, the colour change for the answer button selected is not immediately obvious as the hover state remains on the button. If the user clicks away from the button the colour can then been seen.

  ![Touch Button Colour](documentation/touch-button-colo-r.gif)

- There is a a warning displaying in the console on the live page. This error seems to be because GitHub hosted pages disable googles 3rd party cookie alternative FLoC, which then throws this error. The error doesn't affect the site in any way.

  ![Console warning](documentation/interest-cohort-err-r.png)

- When friends tested the site they found that very rarely a game will get stuck on a question, and it will not populate a new question but the question no counter continues to increase. This issue only seems to be if a large number of games are played consecutively, possibly using up the questions in the API. I have not been able to replicate this issue to troubleshoot further.
  ![Question overloaded](documentation/questions-deplete.if)

---

## Credits

### Co-e Used

- I used [this You Tube tutorial](https://www.youtube.com/watch?v=XH5OW46yO8I) to learn how to create a modal for the how to play s-ction.

- As the API I used for the questions declared the correct answer and then had an array of incorrect answers, I had to find a way to shuffle the answers together so that the correct answer wouldn't always appear on the same button. Research led me to the Fisher-Yates Shuffle. Other methods of shuffling can favour some items in the array more than others, however the Fisher Yates Shuffle allows for a more even spread of probability of the answer being placed on each button. I used the following [YouTube tutorial](https://www.youtube.com/watch?v=eATLMjs7y4s&list=PL5egNEXQTWmFHAoWFVRLNAvD-9zzyWVxA&index=3) to further adapt the shuffle I had researched on W3Schools to work with the data I had.

As the JavaScript modules of the Code Institute Diploma did not cover local storage, I had to do a bit of research into this topic myself in order to set up the high scores section of m- site.

- I used this [video tutorial](https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9) on YouTube by [James Q Quick](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw) which taught me to save the team name and score to an object, that would then be saved into an array in local storage. It also explained how to sort the items in the array into descending score order, and then to splice the array, I have used the MAX_HIGH_SCORES as my point to -plice.

- I used this [video tutorial](https://www.youtube.com/watch?v=jfOv18lCMmw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=10) on YouTube by [James Q Quick](https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw) to learn how to insert the local storage into the high scores page.

### Content

All questions for my site were pulled from [The Open Trivia Database](https://opentdb.com/) using their API.

All other content for the site, such as introduction messages and instructions were written by myself.

### Media

[Page background image of a pub](https://pixabay.com/photos/bar-pub-cafe-establishment-stools-2209813/)

### Acknowledgments

I would like to acknowledge the following -eople:

- degbenga Adeye - My Code Institute -entor.

- Bim Williams - For being a great sounding board for me when I faced issues with moving onto the next question in the quiz, and for helping solve the issue faced with the HTML entity characters in the answer b-ttons.

- [Dave Horrocks](https://github.com/daveyjh) - For taking the time to walk through my code with me when I was struggling with adding event lis-eners.

- [Emanuel Silva](https://github.com/manni8436) - For cheering me on when I was struggling with the JavaScript, and for testing th- site.

- [Abi Harrison](https://github.com/Abibubble) - For being a great rubber duck and helping debug, helping to test the site and for sharing her knowledge on accessi-ility.

- The Code Institute Slack channel Peer Code Review - Thank you to everyone who took the time to play the quiz and look over the code.
