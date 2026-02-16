import { Image } from "expo-image";
import { useColorScheme, View } from "react-native";
import { Redirect } from "expo-router";

import ThemedText from "@/components/themes/ThemedText";
import ThemedView from "@/components/themes/ThemedView";
import ThemedIcon from "@/components/themes/ThemedIcon";
import ThemedButton from "@/components/themes/ThemedButton";

const AuthScreen = () => {
  const colorScheme = useColorScheme();
  const googleColor = colorScheme === 'light' ? '#94A3B8' : "#64748B";

  const auth = true;

  if (auth) return <Redirect href={'/(tabs)' as any} />;

  return (
    <ThemedView safe={true} className="flex-1 px-6 justify-between py-10">
      
      {/* 1. BRANDING HEADER */}
      <ThemedView className="items-center mt-4">
        <ThemedView className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
          <ThemedText className="text-primary font-bold text-xs uppercase tracking-[3px]">
            South Africa • Utility Support
          </ThemedText>
        </ThemedView>
        
        <ThemedText title={true} className="text-3xl font-black text-primary uppercase tracking-tighter">
          Izinyoka <ThemedText className="text-warning">Tracker</ThemedText>
        </ThemedText>
        <View className="h-1 w-12 bg-warning mt-1 rounded-full" />
      </ThemedView>

      {/* 2. ILLUSTRATION SECTION (The "Electric" Glow) */}
      <ThemedView className="items-center justify-center relative">
        {/* Subtle background glow effect */}
        <View className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        
        <ThemedView className="p-4 rounded-full border border-primary/5 bg-uiBackground/50">
          <Image
            source={require("../../assets/images/Electrician-bro.png")}
            style={{ height: 240, width: 240 }}
            contentFit="contain"
          />
        </ThemedView>
      </ThemedView>

      {/* 3. HEADLINE & ACTIONS */}
      <ThemedView className="mb-8">
        <ThemedView className="mb-10 items-center">
          <ThemedText className="text-2xl font-bold text-center leading-tight">
            Report Illegal Connections{"\n"}
            <ThemedText className="text-primary italic">Securely & Seamlessly</ThemedText>
          </ThemedText>
          <ThemedText className="text-muted-foreground text-center mt-3 px-4">
            Help us protect the grid. Upload evidence and location data in real-time.
          </ThemedText>
        </ThemedView>

        {/* AUTH BUTTONS */}
        <ThemedView className="flex-col gap-3">
          <ThemedButton
            className="flex-row items-center justify-center gap-3 bg-primary py-4 rounded-2xl shadow-lg shadow-primary/30 active:opacity-90"
            onPress={() => console.log("Google pressed")}
          >
            <Image
              source={require("../../assets/images/google.png")}
              style={{ width: 20, height: 20, tintColor: googleColor }}
              contentFit="contain"
            />
            <ThemedText className="text-white font-bold text-base">
              Continue with Google
            </ThemedText>
          </ThemedButton>

          <ThemedButton
            className="flex-row items-center justify-center gap-3 bg-uiBackground py-4 rounded-2xl border border-primary/20 active:bg-primary/5"
            onPress={() => console.log("Apple pressed")}
          >
            <ThemedIcon name="logo-apple" size={22} />
            <ThemedText className="font-bold text-base">
              Continue with Apple
            </ThemedText>
          </ThemedButton>
        </ThemedView>

        <ThemedText className="text-center mt-6 text-xs text-muted-foreground px-10">
          By continuing, you agree to report accurately and respect municipal bylaws.
        </ThemedText>
      </ThemedView>

    </ThemedView>
  );
};

export default AuthScreen;