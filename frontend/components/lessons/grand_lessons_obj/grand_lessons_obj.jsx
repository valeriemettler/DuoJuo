import React from 'react';
import TranslateSentenceContainer from '../translate_sentence/translate_sentence_container'
import MarkMeaningContainer from '../mark_meaning/mark_meaning_container'
import ConstructSentence from '../construct_sentence/construct_sentence'
import CompletedContainer from '../../lessons/lesson_complete/completed_container'
    // // idea here is to use the words array; for practice, can just .sample a bunch of words you've completed.
    // const wordObj = {
    //     "chien": "Le chien est epouvantable",
    //     "oeufs": "Bonjour, je cache des oeufs"
    // }
 export const grandLessonsObj = {
    //  < ConstructSentence sentence = { "Hello, I am hiding eggs"} correct = { ["Bonjour je cache des oeufs"]} words = { ["Bonjour", "je", "cache", "des", "oeufs"]} />
    //  < TranslateSentenceContainer sentence = { "Le chien est effrayant"} correct = { ["the dog is scary"]} />
    //  < MarkMeaningContainer sentence = { "私の名前は"} correct = { ["My name is"]} phrase1 = { "My name is"} phrase2 = { "A girl's name is"} phrase3 = { "Your name is"} />,
    //  < ConstructSentence sentence = { "Hello, I am hiding eggs"} correct = { ["Bonjour je cache des oeufs"]} words = { ["Bonjour", "je", "cache", "des", "oeufs"]} />

        "fr": {
            "Basics-1": [<TranslateSentenceContainer sentence={"La fille, la femme"} correct={["the girl, the woman"]} />, <ConstructSentence sentence={"Rekha est bon"} words={["eggs", "milk", "good", "is", "Rekha"]} correct={["Rekha is good"]}/> , <TranslateSentenceContainer sentence={"Je suis un fil, pas un fille"} correct={["I am a boy, not a girl"]} />, <MarkMeaningContainer sentence={"A French woman"} eng={true} correct={"Un femme Francaise"} phrase1={"Un femme Francaise"} phrase2={"Il est un pamplemousse"} phrase3={"Je suis le jeunne fille"}/>],
            "Greetings": [<ConstructSentence sentence={"Hello, I am hiding eggs"} eng={true} correct={["Bonjour je cache des oeufs"]} words={["Bonjour", "je", "cache", "des", "oeufs"]} />, <MarkMeaningContainer sentence={"Capitaine Haddock boit à nouveau"} eng={false} correct={["Captain Haddock is drinking again"]} phrase1={"The haddock is smelly from nature"} phrase2={"Captain Haddock is drinking again"} phrase3={"The haddock is newly rich"} />, <TranslateSentenceContainer sentence={"Tu va me dire ou est le lait maitenant"} correct={["You will tell me where the milk is now"]} />, <TranslateSentenceContainer sentence={"Juliette Binoche"} eng={true} correct={["Juliette Binoche"]} />], 
         "Basics-2": [<TranslateSentenceContainer sentence={"Petite cerises"} correct={["little cherries"]} />, < ConstructSentence sentence={"I am alone at Dunkin Donuts"} correct={["Je suis seule a Dunkin Donuts"]} words={["seule", "Je", "Donuts", "a", "Dunkin", "suis"]} />, < TranslateSentenceContainer sentence={"D'ou etes-vous?"} correct={["Where are you from?"]} />, < MarkMeaningContainer sentence={"Je suis un célébrité"} eng={false} correct={["I am a celebrity"]} phrase1={"I am a celebrated person"} phrase2={"Everyone knows me"} phrase3={"I am a celebrity"} />,]
            //  
        },
        "jp": {
            "Hiragana-1": [<MarkMeaningContainer sentence={"私の名前"} eng={false} correct={["My name is"]} phrase1={"My name is"} phrase2={"A girl's name is"} phrase3={"Your name is"} />, <TranslateSentenceContainer sentence={"に"} correct={["two"]} />, <MarkMeaningContainer sentence={"水"} eng={false} correct={["water"]} phrase1={"Milk"} phrase2={"Gatorade"} phrase3={"Water"} />, <TranslateSentenceContainer sentence={"こんにちは、さようなら"} correct={["hello, goodbye"]} />],
            "Hiragana-2": [<TranslateSentenceContainer sentence={"私の名前はマリアです"} correct={["My name is maria"]} />, <TranslateSentenceContainer sentence={"あなたは私の中央ビジネス地区への道を示すことができました"} correct={["Could you show me the way to the central business district"]} />, <TranslateSentenceContainer sentence={"アメリカ"} correct={["America"]} />, <TranslateSentenceContainer sentence={"私はインサイダー取引で非難されています"} correct={["I have been accused of insider trading"]} />  ],
            "Hiragana-3": [<TranslateSentenceContainer sentence={"ポケットモンスター"} correct={["Pokemon"]} />, <TranslateSentenceContainer sentence={"男の子"} correct={["boy"]} />, <TranslateSentenceContainer sentence={"お父さん"} correct={["father"]} />, <TranslateSentenceContainer sentence={"母"} correct={["mother"]} />],
        },
        "ge": {
            "Basics-1": [<TranslateSentenceContainer sentence={"Der junge"} correct={["The boy"]} />, <TranslateSentenceContainer sentence={"Das mädchen"} correct={["the girl"]} />, <TranslateSentenceContainer sentence={"Ich bin ein Berliner"} correct={["I am a Berliner"]} />, <TranslateSentenceContainer sentence={"Es tut mir leid"} correct={["I am sorry"]} />],
            "Phrases": [<TranslateSentenceContainer sentence={"Hallo, ich bin der junge"} correct={["Hello, I am the boy"]} />, <TranslateSentenceContainer sentence={"Der film"} correct={["the film"]} />, <TranslateSentenceContainer sentence={"Ich heiße Christoph Waltz"} correct={["My name is Christoph Waltz"]} />, <TranslateSentenceContainer sentence={"Ich mag Duolingo"} correct={["I like Duolingo"]} />],
            "Basics-2": [<TranslateSentenceContainer sentence={"Bitte"} correct={["Please"]} />, <TranslateSentenceContainer sentence={"Danke dir"} correct={["thank you"]} />, <TranslateSentenceContainer sentence={"the boy"} correct={["der junge"]} />, <TranslateSentenceContainer sentence={"I like Christoph Waltz"} correct={["Ich mag Christoph Waltz"]} />]
        },
        "es": {
            "Intro": [<TranslateSentenceContainer sentence={"El cerdo esta durmiendo"} correct={["the pig is sleeping"]} />, <ConstructSentence sentence={"Soy el chico que bebe leche"} correct={["I am the boy who drinks milk"]} words={["drinks", "am", "I", "the", "boy", "milk", "who"]} />, <TranslateSentenceContainer sentence={"eres un pájaro?"} correct={["are you a bird?"]} />, <MarkMeaningContainer sentence={"dime porque sueño"} eng={false} correct={["tell me why I dream"]} phrase1={"the pork costs a dime"} phrase2={"why do you dream of pork"} phrase3={"tell me why I dream"}/>],
            "Phrases": [<MarkMeaningContainer sentence={"Mi nombre es Rafael Nadal"} eng={false} correct={["My name is Rafael Nadal"]} phrase1={"My name is Novak Djokovic"} phrase2={"My name is Roger Federer"} phrase3={"My name is Rafael Nadal"} />, <TranslateSentenceContainer sentence={"Soy apasionado"} correct={["I am passionate"]} />, <ConstructSentence sentence={"My best friend is named Roger"} correct={["Mi mejor amigo se llama Roger"]} words={["llama", "Roger", "mejor", "amigo", "Mi", "se"]} />, <MarkMeaningContainer eng={false} sentence={"He ganado Roland Garros 12 veces, ¿no?"} correct={["I have won Roland Garros 12 times, no?"]} phrase1={"I have won Wimbledon 12 times, no?"} phrase2={"I have won Roland Garros 12 times, no?"} phrase3={"I have lost the Australian Open 4 times, no?"} />],
            "Travel": [<TranslateSentenceContainer sentence={"Yo soy de Mallorca"} correct={["I am from Mallorca"]} />, <TranslateSentenceContainer sentence={"Mis brazos son espectaculares"} correct={["My arms are spectacular"]} />, <TranslateSentenceContainer sentence={"Siempre pelearé por ti"} correct={["I will always fight for you"]} />, <TranslateSentenceContainer sentence={"My name is Rafael Nadal"} correct={["Mi nombre es rafael nadal"]} />]
        }
    }

    