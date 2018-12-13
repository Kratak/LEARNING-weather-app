## Weather app

To run an app at localhost just
npm install

To start an app just
npm start

npm test 
for tests

API comes from [openweathermap]
An API key is included, it's free for small traffic.
60 queries per minute.

[openweathermap]: <https://openweathermap.org/>

### Tech stack:
 - react
 - redux
 - styled-components
 - jest 
 - parcel-bundler
 - TypeScript

I'm practicing with Scott Tolinski from [level] up tutorials
Also, great credits goes to stakoverflow community and official docs.



[level]: <http://leveluptutorials.com/>



## Work log

#### 13.12.2018 09:00-12:00 "version": "0.1.3"

####### Redux 

    getinput()
        from inputs at form to redux
    getweather()
        data from redux passing to api
        output on div


#### 11.12.2018 16:00 - 22:30 "version": "0.1.3"

####### Refactor, Redux conections


#### 11.12.2018 08:80 - 15:30 "version": "0.1.2"

####### Refactor, icons


#### 10.12.2018 08:30 - 22:30 "version": "0.1.1"

####### Api conections, styles , RWD


#### 09.12.2018 16:30 - 23:30 "version": "0.1.0"

####### Api conections



#### 09.12.2018 08:30 - 15:30 "version": "0.1.0"

###### Styles, files managment, components



#### 08.12.2018 18:00 - 23:30 "version": "0.1.0"

###### Redux react typescript

Entry of log, project setup.


## Todo

#### Errors
    try catch to wrap whole functions
#### Errors /

#### Button
To use the button, without messing with code just simple keyframes to move him down
out of visibility.
####  Button /

#### Language/Metrics
    Made on simple flags function
    const flag = {
        deafault: eng
        switched: user choice
    }
    placeholder={CITY.flag}/>
#### Language/Metrics

Icons from 
https://openweathermap.org/weather-conditions
Rain descriptions also

schema 

http://openweathermap.org/img/w/{data}
data = `10d.png`

"weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }
]

standard api.openweathermap.org/data/2.5/find?q=London

metric api.openweathermap.org/data/2.5/find?q=London&units=metric

imperial api.openweathermap.org/data/2.5/find?q=London&units=imperial




https://openweathermap.org/forecast5#other


NOTE: Translation is only applied for the "description" field.
API call:
http://api.openweathermap.org/data/2.5/forecast?id=524901&lang={lang}
Parameters:
lang language code
Examples of API calls:
http://api.openweathermap.org/data/2.5/forecast?id=524901&lang=zh_cn

https://countrycode.org/


