import React from "react";
import { useTranslation } from "react-i18next";

import { createStackNavigator } from "@react-navigation/stack";

import { Advanced } from "@/pages/Advanced";
import { Settings } from "@/pages/Settings";

import type { SettingsStackParamList } from "./types";

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export const SettingsNavigator = () => {
  const { t } = useTranslation("common");

  return (
    <SettingsStack.Navigator initialRouteName="Settings">
      <SettingsStack.Screen
        name={"Settings"}
        component={Settings}
        options={{
          title: t("Settings"),
          headerBackTitleVisible: false,
        }}
      />
      <SettingsStack.Screen
        name={"Advanced"}
        component={Advanced}
        options={{
          title: t("Advanced"),
          headerBackTitleVisible: false,
        }}
      />
    </SettingsStack.Navigator>
  );
};
