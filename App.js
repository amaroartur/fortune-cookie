import React, { useEffect, useState } from "react";
import { View, Text, Platform, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {

  const [isOpened, setIsOpened] = useState(false)
  const [randomNumber, setRandomNumber] = useState(null)
  const [allPhrases, setAllPhrases] = useState([])

  useEffect(() => {
    (() => {
      fetch('https://type.fit/api/quotes')
        .then(res => res.json())
        .then(res => setAllPhrases(res))
        .catch(err => console.log(err))
    })()
  }, [])

  function openFortuneCookie() {
    let generatedNumber
    do {
      generatedNumber = Math.floor(Math.random() * allPhrases.length)
    } while (generatedNumber === randomNumber)
    setRandomNumber(generatedNumber)
    setIsOpened(true)
  }

  function resetFortuneCookie() {
    setRandomNumber(null)
    setIsOpened(false)
  }

  return (
    <View style={styles.container}>
      <Image
        source={isOpened ? require("./src/biscoitoAberto.png") : require("./src/biscoito.png")}
        style={styles.image}
      />
      <View style={styles.phraseView}>
        <Text style={styles.phrase} > {isOpened ? `"${allPhrases[randomNumber]?.text}"` : ""} </Text>
      </View>

      <TouchableOpacity
        onPress={openFortuneCookie}
        style={[styles.button, { borderColor: '#dd7b22' }]}
      >
        <Text style={[styles.text, { color: '#dd7b22' }]} >Quebrar Biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={resetFortuneCookie}
        style={styles.button}
      >
        <Text style={styles.text} >Reiniciar Biscoito</Text>
      </TouchableOpacity>
    </View>
  )

}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 230,
    height: 230
  },
  phraseView: {
    justifyContent: 'center',
    margin: 30,
  },
  phrase: {
    color: '#dd7b22',
    fontStyle: 'italic',
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
  },
})