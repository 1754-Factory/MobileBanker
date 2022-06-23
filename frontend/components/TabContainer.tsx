import * as React from "react";
import { TouchableOpacity } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

import { getColor } from "../styles/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH, layout, text } from "../styles/styles";

import { View } from "./Themed";
import { Text } from "./ThemedComponents";
// ...

const initialLayout = {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT,
};

type TabContainerProps = {
  tabs: {
    name: string;
    component: React.ComponentType;
    hide?: boolean;
  }[];
};

// const Tab = createMaterialTopTabNavigator();

export function TabContainer({ tabs }: TabContainerProps) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState(
    tabs.map(({ name }) => ({
      key: name,
      title: name,
    }))
  );

  const renderScene = SceneMap(
    tabs.reduce(
      (accum: { [name: string]: React.ComponentType }, cur) => ({
        ...accum,
        [cur.name]: cur.component,
      }),
      {}
    )
  );

  const renderTabBar = () => (
    <View
      style={[
        layout.row,
        layout.spaceBetween,
        {
          width: DEVICE_WIDTH * 0.8,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 20,
        },
      ]}
    >
      {tabs.map(({ name, hide }, i) =>
        hide ? null : (
          <TouchableOpacity
            key={`tab-${i}-${name}`}
            onPress={() => setIndex(i)}
            style={{
              paddingTop: 20,
              margin: 0,
              borderBottomColor: getColor(index === i ? "blue" : "disabled", 1),
              borderBottomWidth: 3,
              width: `${100 / tabs.length}%`,
            }}
          >
            <Text
              style={[
                text.h2,
                text.center,
                {
                  fontSize: text.h2.fontSize * 1.2,
                  lineHeight: text.h2.lineHeight * 1.2,
                  opacity: index === i ? 1 : 0.5,
                  fontWeight: index === i ? "900" : "500",
                  paddingHorizontal: 10,
                  width: "100%",
                },
              ]}
            >
              {name}
            </Text>
          </TouchableOpacity>
        )
      )}
    </View>
  );

  return (
    <View
      style={{ minHeight: DEVICE_HEIGHT * 1.5, backgroundColor: "transparent" }}
    >
      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}
