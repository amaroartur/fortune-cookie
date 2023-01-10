import React, { useState } from "react";
import { View, Text, Platform, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {

  const [isOpened, setIsOpened] = useState(false)
  const [randomNumber, setRandomNumber] = useState(null)

  const allPhrases = [
    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "A juventude não é uma época da vida, é um estado de espírito",
    "Siga os bons e aprenda com eles.",
    "O bom-senso vale mais do que muito conhecimento.",
    "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
    "A adversidade é um espelho que reflete o verdadeiro eu.",
    "Uma bela flor é incompleta sem as suas folhas."
  ]

  function openFortuneCookie() {
    let aux
    do {
      aux = Math.floor(Math.random() * allPhrases.length)
    } while (aux === randomNumber)
    setRandomNumber(aux)
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
        <Text style={styles.phrase} > {isOpened ? `"${allPhrases[randomNumber]}"` : ""} </Text>
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
    height: 130,
    justifyContent: 'center'
  },
  phrase: {
    color: '#dd7b22',
    fontStyle: 'italic',
    fontSize: 20,
    margin: 30,
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