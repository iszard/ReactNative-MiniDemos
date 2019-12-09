import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: Num || -Num}

  switch (action.type) {
    case 'change_red':
      return (state.red + action.payload > 255 || state.red + action.payload < 0)
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return (state.green + action.payload > 255 || state.green + action.payload < 0)
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return (state.blue + action.payload > 255 || state.blue + action.payload < 0)
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareSceen = () => {
  const [{ red, green, blue }, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
        <ColorCounter
            onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: 'change_red', payload: -COLOR_INCREMENT })}
            color="Red"
        />
        <ColorCounter
            onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: 'change_green', payload: -COLOR_INCREMENT })}
            color="Green"
        />
        <ColorCounter
            onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: 'change_blue', payload: -COLOR_INCREMENT })}
            color="Blue"
        />
        <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>
  );
};

export default SquareSceen;