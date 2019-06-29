import React from 'react';
import TranslateSentenceContainer from '../translate_sentence/translate_sentence_container'
import MarkMeaningContainer from '../mark_meaning/mark_meaning_container'

 export const grandLessonsObj = {
        "fr": {
            "Basics-1": [<TranslateSentenceContainer sentence={"Le chien est epouvantable"} correct={["the dog is scary"]}/>, <TranslateSentenceContainer sentence={"Je suis un fil, pas un fille"} correct={["I am a boy, not a girl"]} />, <TranslateSentenceContainer sentence={"La fille, la femme"} correct={["the girl, the woman"]}/>, <MarkMeaningContainer sentence={["A French woman"]} correct={"Un femme Francaise"} phrase1={"Un femme Francaise"} phrase2={"Il est un pamplemousse"} phrase3={"Je suis le jeunne fille"}/>],
         "Greetings": [<TranslateSentenceContainer sentence={"Bonjour, je cache des oeufs"} correct={["Hello, I am hiding eggs"]} />, <TranslateSentenceContainer sentence={"Tu va me dire ou est le lait maitenant"} correct={["You will tell me where the milk is now"]}/>],
            "Basics-2": []
        },
        "jp": {
            "Hiragana-1": []
        },
        "ge": {},
        "esp": {}
    }
