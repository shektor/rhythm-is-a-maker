<h1 align="center">
  <p align="center">Rhythm Is A Maker</p>
  <a href="https://rhythm-is-a-maker.herokuapp.com/"><img width="584" alt="Beatgrid" src="https://user-images.githubusercontent.com/44544977/59917255-67ea1c80-9419-11e9-9b94-2efc3cd7733c.png"></a>
</h1>
  
<p align="center">
<a href="https://travis-ci.org/shektor/rhythm-is-a-maker"><img src="https://img.shields.io/travis/shektor/rhythm-is-a-maker/master.svg"></a>
<a href ="https://coveralls.io/github/shektor/rhythm-is-a-maker"><img src="https://img.shields.io/coveralls/github/shektor/rhythm-is-a-maker.svg"></a>
</p>

<h1 align='center'>
 Team
</h1>

|  **Team Collaborators** | Scott Hall|   Frankie Bamgboye| Michael Darmody | Steven Hektor| Sarpong Abasimi | Jake Napper |
| :---:                  | :-----: | :-------:     | :------:      |:-------: | :-----:|:-----:|
|**Github Profile**       |<a href='https://github.com/HottScall'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a> |<a href='https://github.com/FrankieBoye'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a>|<a href='https://github.com/Michael-Darmody'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a>|<a href='https://github.com/shektor'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a>|<a href='https://github.com/SarpongAbasimi'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a>|<a href='https://github.com/NapperJLG'><img src='https://user-images.githubusercontent.com/37377831/56474819-35529080-6477-11e9-9e63-4cdf0055c340.png' width='40'></a>|

<h4 align='center'>
How To Use Application.
</h4>

- ``clone`` this repo.
- Open terminal and ``cd`` into ``rhythms-is-a-maker``.
- In terminal, type ``npm install`` to install dependencies.
- To run tests type ``npm test``.
- To run server type ``npm run dev``.
- click on this **[link](http://localhost:3000/)**.


<h4 align='center'>
User stories - Features.
</h4>

```
As a User,
So that I can make music,
I would like to be able to make sounds on the web.
```

<h4 align='center'>
How Tone.Js Works 
</h4>

- To Learn about ``tone.js`` => **[here](https://tonejs.github.io)**.
- Tone.js is a framework for creating ``interactive`` music in the browser.
- Here is how sounds are generated.

 ```javascript 
var synth = new Tone.Synth().toMaster()
synth.triggerAttackRelease('C4', '8n')
```

> This creates a new instance of Tone and stores it into a variable called ``synth``. The ``.toMaster()`` connects the sound to the speakers on your device and lastly, to make a sound we use a method called ``triggerAttackRelease('C4', '8n')``.

```TriggerAttackRelease is a combination of two methods: triggerAttack when the amplitude is rising (for example from a ‘key down’ or ‘note on’ event), and triggerRelease is when the amplitude is going back to 0 (‘key up’ / ‘note off’).```


- ``14th June 2019``
> This is how the application is currently looking.

<img width="1274" alt="Screen Shot 2019-06-15 at 21 46 08" src="https://user-images.githubusercontent.com/37377831/59556281-b598fc00-8fb7-11e9-904f-a5134a5bd53c.png">

<h4 align='center'>
Challenges.
</h4>

- Unit and feature testing the application.
> Writing unit and feature test for the application proved to be very challenging as we did not know what to test for in the ``Tonejs`` library. We also found out that ``node js ``, which we are using for our ``backend``, ``express js``, could not be used in browser and ``Tone.js`` could not be tested in the terminal. This meant that we had to find other alternatives. The alternative was to use ``Karma`` to test the applicaiton.

- Configuring ``Karma``.
- Setting up ``Travis`` Properly.


|      TECH STACK                                      |
|    :------:                                          |
|Express.js \| Tone.js \| Travis CI \| Karma \|Cypress |
   
