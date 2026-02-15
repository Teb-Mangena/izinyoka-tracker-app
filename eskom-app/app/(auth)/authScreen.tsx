import { Image } from "expo-image";

import ThemedText from "@/components/themes/ThemedText";
import ThemedView from "@/components/themes/ThemedView";
import ThemedIcon from "@/components/themes/ThemedIcon";
import ThemedButton from "@/components/themes/ThemedButton";
import { Redirect } from "expo-router";

const authScreen = () => {
  const auth = true;
  
  if(auth) return <Redirect href={'/(tabs)' as any} />

  return (
    <ThemedView safe={true} className="flex-1 items-center justify-center">

      <ThemedView className="items-center pt-10 my-5">
          {/* <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: 100, height: 100, marginVertical: -20 }}
            contentFit="contain"
          /> */}
          <ThemedText title={true} className="text-2xl font-bold text-primary font-serif tracking-wider uppercase">
            Izinyoka Tracker
          </ThemedText>
        </ThemedView>

      <ThemedView className="mb-5">
        <Image
          source={require("../../assets/images/Electrician-bro.png")}
          style={{
            height: 190,
            width: 190,
          }}
          contentFit="contain"
        />
      </ThemedView>

      {/* Headline */}
      <ThemedView className="my-6 items-center">
        <ThemedText className="text-xl font-bold text-foreground text-center font-sans">
          Upload images of illegal connections
        </ThemedText>
        <ThemedText className="text-lg font-bold text-primary font-mono">
          Seamlessly
        </ThemedText>
      </ThemedView>

      {/* AUTH BUTTONS */}
      <ThemedView className="flex-row gap-4 mx-3">
        <ThemedButton
          className="flex-1 flex-row items-center justify-center gap-2 bg-white/95 py-4 rounded-2xl active:scale-[0.97]"
          // disabled={isLoading}
          accessibilityRole="button"
          accessibilityLabel="Continue with Google"
          // onPress={() => !isLoading && handleSocialAuth("oauth_google")}
          onPress={() => console.log("Google pressed")}
        >
          <Image
            source={require("../../assets/images/google.png")}
            style={{ width: 20, height: 20 }}
            contentFit="contain"
          />
          <ThemedText className="text-gray-900 font-semibold text-sm">
            Google
          </ThemedText>
        </ThemedButton>

        <ThemedButton
          className="flex-1 flex-row items-center justify-center gap-2 bg-white/10 py-4 rounded-2xl border border-white/20 active:scale-[0.97]"
          // disabled={isLoading}
          accessibilityRole="button"
          accessibilityLabel="Continue with Apple"
          // onPress={() => !isLoading && handleSocialAuth("oauth_apple")}
          onPress={() => console.log("Apple pressed")}
        >
          <ThemedIcon name="logo-apple" size={20} />
          <ThemedText className="text-foreground font-semibold text-sm">
            Apple
          </ThemedText>
        </ThemedButton>
      </ThemedView>
    </ThemedView>
  );
};

export default authScreen;
