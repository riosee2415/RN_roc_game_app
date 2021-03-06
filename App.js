import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CURRENT_WIDTH = Dimensions.get(`window`).width;

const App = () => {
  const [tab, setTab] = useState(0);

  const _startButtonClickHandler = (value) => {
    setTab(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inGameArea}>
        {tab === 0 && (
          <TouchableOpacity
            style={styles.startBtn}
            onPressOut={() => _startButtonClickHandler(1)}
          >
            <Text style={styles.startBtnTxt}>START GAME!</Text>
          </TouchableOpacity>
        )}

        {tab === 1 && (
          <View>
            <View style={styles.inGameTop}>
              <Text>TOP</Text>
            </View>
            <View style={styles.inGameMiddle}>
              <LinearGradient
                colors={["#c8d6e5", "#8395a7", "#c8d6e5"]}
                locations={[0.9, 0.1]}
                style={styles.vsView}
                start={[`left`, `right`]}
              >
                <Text style={styles.vsText}>VS</Text>
              </LinearGradient>
            </View>
            <View style={styles.inGameBottom}>
              <Text>BOTTOM</Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.resultArea}>
        <View style={styles.resultAreaTop}></View>
        <View style={styles.resultAreaBottom}>
          {tab === 1 && (
            <TouchableOpacity
              style={styles.startBtn}
              onPressOut={() => _startButtonClickHandler(0)}
            >
              <Text style={styles.startBtnTxt}>RESTART!</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inGameArea: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  resultArea: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  resultAreaTop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  resultAreaBottom: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  startBtn: {
    width: CURRENT_WIDTH / 2,
    height: 45,
    backgroundColor: `#353b48`,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  startBtnTxt: {
    color: `#fff`,
    fontWeight: `700`,
    fontSize: 18,
  },

  inGameTop: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  inGameMiddle: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  inGameBottom: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  vsView: {
    width: CURRENT_WIDTH,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  vsText: {
    fontSize: 20,
    fontWeight: `700`,
    color: `#fff`,
  },
});

export default App;
