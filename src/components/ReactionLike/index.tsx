import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import {
  ThumbsUp,
} from "@tamagui/lucide-icons";
import * as Haptics from "expo-haptics";
import type { FontSizeTokens, SizeTokens } from "tamagui";
import { Button, Card, H4, Paragraph, SizableText, XStack, YStack, Spinner } from "tamagui";

import { CSB_SCAN } from "@/constants/env";
import { useAuthPress } from "@/hooks/use-auth-press";
import { useFnLoadingWithStateChange } from "@/hooks/use-fn-loading-with-state-change";
import { useRootNavigation } from "@/hooks/use-navigation";
import { useCheckLike, useGetLikeCounts, useGetLikes, useToggleLikePage } from "@/queries/page";

import { ModalWithFadeAnimation } from "../ModalWithFadeAnimation";
import { UniLink } from "../UniLink";
import { XTouch } from "../XTouch";

interface Props {
  characterId: number
  noteId: number
  iconSize?: SizeTokens
  fontSize?: FontSizeTokens
}

export const ReactionLike: React.FC<Props> = ({ characterId, noteId, iconSize = "$1", fontSize = "$6" }) => {
  const navigation = useRootNavigation();
  const { t, i18n } = useTranslation("common");
  const [isLoading, setIsLoading] = useState(false);
  const [isLikeOpen, setIsLikeOpen] = useState(false);
  const [isUnlikeOpen, setIsUnlikeOpen] = useState(false);
  const [likes] = useGetLikes({
    characterId,
    noteId,
  });

  const toggleLikePage = useToggleLikePage();

  const [likeStatus] = useCheckLike({
    characterId,
    noteId,
  });

  const { data: likeCount = 0 } = useGetLikeCounts({
    characterId,
    noteId,
  });

  const like = useFnLoadingWithStateChange(() => {
    setIsLoading(true);
    return toggleLikePage.mutateAsync({
      characterId,
      noteId,
      action: "link",
    }).finally(() => setIsLoading(false));
  });

  const unlike = useFnLoadingWithStateChange(() => {
    setIsLoading(true);
    return toggleLikePage.mutateAsync({
      noteId,
      characterId,
      action: "unlink",
    }).finally(() => setIsLoading(false));
  });

  const handleLikeAction = useAuthPress(() => {
    if (characterId && noteId) {
      if (likeStatus.isLiked) {
        openLikeModal();
      }
      else {
        like();
      }
    }
  });

  const handleUnlikeAction = () => {
    if (characterId && noteId) {
      closeUnlikeModal();
      if (likeStatus.isLiked) {
        unlike();
      }
    }
  };

  const onOpenList = () => {
    if (likes.length < 1) {
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate("CharacterListPage", {
      title: t("Like List"),
      characterId,
      noteId,
      type: "like",
    });
  };

  const openLikeModal = () => setIsLikeOpen(true);
  const closeLikeModal = () => setIsLikeOpen(false);
  const openUnlikeModal = () => setIsUnlikeOpen(true);
  const closeUnlikeModal = () => setIsUnlikeOpen(false);

  return (
    <>
      <XTouch enableHaptics hitSlopSize={44} touchableComponent={TouchableWithoutFeedback} disabled={isLoading} onPress={handleLikeAction} onLongPress={onOpenList} delayLongPress={150}>
        <XStack alignItems="center" gap="$1.5">
          <ThumbsUp
            size={iconSize}
            color={likeStatus.isLiked ? "$primary" : "$color"}
          />
          <SizableText size={fontSize} color={likeStatus.isLiked ? "$primary" : "$color"}>
            {likeCount}
          </SizableText>
        </XStack>
      </XTouch>

      <ModalWithFadeAnimation
        isVisible={isLikeOpen}
        onBackdropPress={closeLikeModal}
      >
        <Card elevate bordered>
          <Card.Header bordered padding="$3">
            <H4>{t("Like successfully") || ""}</H4>
          </Card.Header>
          <YStack padding="$3">
            <Paragraph>
              <Trans
                i18n={i18n}
                i18nKey={"like stored"}
                defaults="Your like has been stored on the blockchain, view it on <UniLink>Crossbell Scan</UniLink>"
                components={{
                  UniLink: (
                    <UniLink url={`${CSB_SCAN}/tx/${likeStatus.transactionHash}`} onPress={closeLikeModal}>
                      Crossbell Scan
                    </UniLink>
                  ),
                }}
              />
            </Paragraph>
          </YStack>
          <Card.Footer padded alignItems="center" justifyContent="center" gap="$4">
            <Button minWidth={"45%"} onPress={closeLikeModal} backgroundColor={"$backgroundFocus"} color={"$primary"} borderRadius="$5">{t("Got it, thanks!")}</Button>
            <Button minWidth={"45%"} onPress={async () => {
              closeLikeModal();
              await new Promise(resolve => setTimeout(resolve, 500));
              openUnlikeModal();
            }} borderRadius="$5">{t("Revert")}</Button>
          </Card.Footer>
        </Card>
      </ModalWithFadeAnimation>
      <ModalWithFadeAnimation
        isVisible={isUnlikeOpen}
        onBackdropPress={closeUnlikeModal}
      >
        <Card elevate bordered>
          <Card.Header bordered padding="$3">
            <H4>{t("Confirm to revert")}</H4>
          </Card.Header>
          <YStack padding="$3">
            <Paragraph>
              <Trans i18nKey="like revert" i18n={i18n}>
            Do you really want to revert this like action?
              </Trans>
            </Paragraph>
          </YStack>
          <Card.Footer padded alignItems="center" justifyContent="center" gap="$4">
            <Button minWidth={"45%"} onPress={closeUnlikeModal} backgroundColor={"$backgroundFocus"} color={"$primary"} borderRadius="$5">{t("Cancel")}</Button>
            <Button minWidth={"45%"} onPress={handleUnlikeAction} borderRadius="$5">{t("Confirm")}</Button>
          </Card.Footer>
        </Card>
      </ModalWithFadeAnimation>
    </>
  );
};

