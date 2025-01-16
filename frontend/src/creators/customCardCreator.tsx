import {
  AvaiableCollectionType,
  CollectionType,
  FeatureType,
  LearningEffectivenessItemType,
  LearningMode,
  TestimonialType,
} from "@/@Types/general";
import { CollectionProgressBody } from "@/pages/Collection/components/CollectionProgress/components/CollectionProgressBody";
import { CollectionProgressHeader } from "@/pages/Collection/components/CollectionProgress/components/CollectionProgressHeader";
import { ActiveUsersBody } from "@/pages/Dashboard/components/ActiveUsersCard/components/ActiveUsersBody";
import { ActiveUsersHeader } from "@/pages/Dashboard/components/ActiveUsersCard/components/ActiveUsersHeader";
import { AvaiableCollectionListBody } from "@/pages/Dashboard/components/AvailableCollectionList/components/AvaiableCollectionListBody";
import { AvaiableCollectionListHeader } from "@/pages/Dashboard/components/AvailableCollectionList/components/AvaiableCollectionListHeader";
import { CollectionListBody } from "@/pages/Dashboard/components/CollectionsList/components/CollectionListBody";
import { CollectionsListHeader } from "@/pages/Dashboard/components/CollectionsList/components/CollectionsListHeader";
import { LearningEffectivenessBody } from "@/pages/Dashboard/components/LearningEffectiveness/components/LearningEffectivenessBody";
import { LearningEffectivenessHeader } from "@/pages/Dashboard/components/LearningEffectiveness/components/LearningEffectivenessHeader";
import { QuickStartLearningBody } from "@/pages/Dashboard/components/QuickStartLearning/components/QuickSartLearningBody";
import { QuickStartHeader } from "@/pages/Dashboard/components/QuickStartLearning/components/QuickStartHeader";
import { ScoreCardBody } from "@/pages/Dashboard/components/ScoreCard/components/ScoreCardBody";
import { ScoreCardHeader } from "@/pages/Dashboard/components/ScoreCard/components/ScoreCardHeader";
import { FeatureBody } from "@/pages/Landing/sections/Feature/components/FeatureBody";
import { FeatureHeader } from "@/pages/Landing/sections/Feature/components/FeatureHeader";
import { TestimonialBody } from "@/pages/Landing/sections/Testimonial/components/TestimonialBody";
import { TestimonialHeader } from "@/pages/Landing/sections/Testimonial/components/TestimonialHeader";
import { LearningEfficiencyBody } from "@/pages/Learn/components/LearningEfficiency/components/LearningEfficiencyBody";
import { LearnModeCardBody } from "@/pages/Learn/components/LearnModeCard/components/LearnModeCardBody";
import { LearnModeCardHeader } from "@/pages/Learn/components/LearnModeCard/components/LearnModeCardHeader";
import { LearnProgressCardBody } from "@/pages/Learn/components/LearnProgressCard/components/LearnProgressCardBody";

export const customCardCreator = (
  type: string,
  prop?:
    | FeatureType
    | TestimonialType
    | LearningEffectivenessItemType
    | AvaiableCollectionType
    | CollectionType
    | LearningMode
) => {
  let header;
  let body;

  switch (type) {
    //dla bardziej rozbudowanych body stworzyc komponenty
    //add here ENUM
    case "feature":
      header = <FeatureHeader feature={prop as FeatureType} />;
      body = <FeatureBody description={(prop as FeatureType).description} />;
      break;
    //add here ENUM
    case "testimonial":
      header = <TestimonialHeader testimonial={prop as TestimonialType} />;
      body = <TestimonialBody content={(prop as TestimonialType).content} />;
      break;
    //add here ENUM
    case "quickStartLearning":
      header = <QuickStartHeader />;
      body = <QuickStartLearningBody />;

      break;
    //add here ENUM
    case "learningEffectiveness":
      header = <LearningEffectivenessHeader />;
      body = <LearningEffectivenessBody />;
      break;
    case "avaiableCollection":
      header = (
        <AvaiableCollectionListHeader
          avaiableCollection={prop as AvaiableCollectionType}
        />
      );
      body = (
        <AvaiableCollectionListBody
          cardCount={(prop as AvaiableCollectionType).cardCount}
        />
      );
      break;
    case "collectionList":
      header = <CollectionsListHeader name={(prop as CollectionType).name} />;
      body = (
        <CollectionListBody cardCount={(prop as CollectionType).cardCount} />
      );
      break;
    case "scoreCard":
      header = <ScoreCardHeader />;
      body = <ScoreCardBody />;
      break;
    case "activeUsersCard":
      header = <ActiveUsersHeader />;
      body = <ActiveUsersBody />;
      break;
    case "collectionProgress":
      header = (
        <CollectionProgressHeader
          name={(prop as AvaiableCollectionType).name}
        />
      );
      body = (
        <CollectionProgressBody
          description={(prop as AvaiableCollectionType).description}
        />
      );
      break;
    case "learnProgress":
      body = <LearnProgressCardBody />;
      break;
    case "learningMode":
      header = <LearnModeCardHeader mode={prop as LearningMode} />;
      body = (
        <LearnModeCardBody description={(prop as LearningMode).description} />
      );
      break;
    case "learningEfficiency":
      body = <LearningEfficiencyBody />;
      break;
    default:
      throw new Error(`Unsupported type: ${type}`);
  }

  return { header, body };
};
