<h1 align="center">
  <p align="center">Rhythm Is A Maker</p>
  <a href="https://rhythm-is-a-maker.herokuapp.com/"><img alt="Beatgrid" src="https://user-images.githubusercontent.com/44544977/59922445-b3f08d80-9428-11e9-8827-8432a4d02094.png"></a>
</h1>
  
<p align="center">
<a href="https://travis-ci.org/shektor/rhythm-is-a-maker"><img src="https://img.shields.io/travis/shektor/rhythm-is-a-maker/master.svg"></a>
<a href ="https://coveralls.io/github/shektor/rhythm-is-a-maker"><img src="https://img.shields.io/coveralls/github/shektor/rhythm-is-a-maker.svg"></a>
</p>

## [Team](https://github.com/shektor/rhythm-is-a-maker#team) |  [Introduction](https://github.com/shektor/rhythm-is-a-maker#user-stories) |  [Getting started](https://github.com/shektor/rhythm-is-a-maker#getting-started) |  [Tests](https://github.com/shektor/rhythm-is-a-maker#running-tests) |  [Usage](https://github.com/shektor/rhythm-is-a-maker#usage) |   [Deployment](https://github.com/shektor/rhythm-is-a-maker#deployment) |   [User Stories](https://github.com/shektor/rhythm-is-a-maker#user-stories)

## Team

| Scott Hall|   Frankie Bamgboye| Michael Darmody | Steven Hektor| Sarpong Abasimi | Jake Napper |
| :-----: | :-------:     | :------:      |:-------: | :-----:|:-----:|
|<a href='https://github.com/HottScall'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a> |<a href='https://github.com/FrankieBoye'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a>|<a href='https://github.com/Michael-Darmody'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a>|<a href='https://github.com/shektor'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a>|<a href='https://github.com/SarpongAbasimi'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a>|<a href='https://github.com/NapperJLG'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a>|

## Introduction

'Rhythm is a maker' is a web app for easily creating your own music, using a sound sequencer and synth keyboard, while chatting with other muscians.

## Getting Started

```bash
> git clone git@github.com:shektor/rhythm-is-a-maker.git
> cd rhythm-is-a-maker
> npm install
> npm start
```
Navigate to [localhost:3000](http://localhost:3000/) on your web browser.

## Running Tests

Testing is executed using three frameworks: Jasmine and Karma for back-end and front-end unit tests, Cypress for end to end feature tests.

```bash
> npm start # required for cypress
> npm test # run in a second console
```

## Usage

The app consists of 3 parts, a soundboard, keyboard and chat.

The soundboard has 8 unique sound samples, 1 for each row, with the columns each representing a beat, of which there are 16 on 2 bars. The play button starts the loop, playing the sound for each row on the beat, which is indicated by the progressing white dots just below the soundboard. The speed, or BPM, can be adjusted just above the soundboard with the slider, and text indicating the current BPM.

The keyboard below the soundboard can be played using the keys on your computer, with the note and corresponding computer key indicated. The sound profile of the keyboard can be adjusted using sliders just above, including the volume, delay, autowah and reverb.

Users connected to the site can chat to each other using the message box to the right of the soundboard. The message will be sent to all other users once you hit enter. The username is currently randomly chosen for you randomly based on a list of famous muscians.

<a href="https://rhythm-is-a-maker.herokuapp.com/">
<img alt="app" src="https://user-images.githubusercontent.com/44544977/59923687-f10a4f00-942b-11e9-8826-8fe74f1c6626.png">
</a>

Disco mode can be activated using the toggle button on the left side. This changes the background colour of DOM elements on the page, and is linked to the beat timings, currently changing every second beat.

<a href="https://rhythm-is-a-maker.herokuapp.com/">
<img alt="disco" src="https://media.giphy.com/media/mDZB0qpJHjaRvvEyUY/giphy.gif">
</a>

## Deployment

The app is currently deployed on [Heroku](https://rhythm-is-a-maker.herokuapp.com/)

## User stories

```
As a budding muscian,
So that I can choose some sounds,
I would like to see a sound board grid.

As a budding muscian,
So that it is easy to make music,
I would like a 2 bar loop system.

As a budding muscian,
So that I can select some sounds,
I would like to click on a box in a paticular bar and see it active.

As a budding muscian,
So that I can hear different sounds,
I would like have a choice between at least 2 different sounds.

As a budding muscian,
So that I can listen to my composition,
I would like to press play and hear my selected sounds at the correct time.

As a budding muscian,
So that I can enjoy my composition,
I would like it to loop to the beginning after ending until I hit stop.

As a budding muscian,
So that I can get some visual feedback,
I would like to see the grid visually change related to the bar and sounds being played.
```

|      TECH STACK                                      |
|    :------:                                          |
|Express.js \| Tone.js \| Travis CI \| Karma \|Cypress |
   
