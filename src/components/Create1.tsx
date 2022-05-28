import React, { useState } from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import colors from "../constants/colors";
import { FaCamera } from "react-icons/fa";
import dynamic from "next/dynamic";

const FontPicker = dynamic(() => import("font-picker-react"), { ssr: false });
//#font key : AIzaSyASIKW1b-hE-Xwnb5H4G69qGzbFFWUAzl4
const fontKey = "AIzaSyASIKW1b-hE-Xwnb5H4G69qGzbFFWUAzl4";
type Choices = {
  name: string;
  logo: File | null;
  color: string;
  font: string;
};
const InputText = styled(TextField)`
  margin-top: 1em;
  width: 60%;
`;
const NextButton = styled(Button)`
  margin-top: 1em;
`;
const Container = styled.div`
  width: 50vw;
  min-height: 50vh;
  margin-bottom: 2em;
`;
const Surface = styled(Paper)`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
type Step = {
  title: string;
  id: StepIdType;
  placeholder?: string;
  type: "text" | "file" | "color" | "font";
};
const steps: Step[] = [
  {
    title: "Nom de votre site",
    id: "name",
    placeholder: "Nom de votre site",
    type: "text",
  },
  {
    title: "Votre logo",
    id: "logo",
    type: "file",
  },
  {
    title: "Votre couleur",
    id: "color",
    type: "color",
  },
  {
    title: "Choisissez une police",
    id: "font",
    type: "font",
  },
];
type StepIdType = "name" | "logo" | "color" | "font";
const Create1 = () => {
  const [step, setStep] = useState(0);
  const [choices, setChoices] = useState<Choices>({
    name: "",
    logo: null,
    color: "",
    font: "Open Sans",
  });
  const [ended, setEnded] = useState(false);
  const currentstep = steps[step];
  const stepTitle = steps[step].title;
  const stepId: StepIdType = steps[step].id;
  if (ended) {
    return <Summary choices={choices} />;
  }
  return (
    <Container>
      <Surface>
        <Typography
          variant="h2"
          textAlign="center"
          color={colors.secondary.dark}
        >
          {stepTitle}
        </Typography>
        {currentstep.type === "text" && (
          <InputText
            label={currentstep.placeholder}
            variant="filled"
            onChange={(e) => {
              setChoices({ ...choices, [stepId]: e.target.value });
            }}
          />
        )}
        {currentstep.type === "file" && (
          <label htmlFor="contained-button-file">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple={false}
              type="file"
              hidden
              onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                setChoices({ ...choices, [stepId]: file });
              }}
            />
            <Button variant="outlined" component="span" endIcon={<FaCamera />}>
              Photo
            </Button>
          </label>
        )}
        {currentstep.type === "color" && (
          <input
            type="color"
            onChange={(e) => {
              setChoices({ ...choices, [stepId]: e.target.value });
            }}
          />
        )}
        {currentstep.type === "font" && (
          <div>
            <FontPicker
              apiKey={fontKey}
              activeFontFamily={choices.font}
              onChange={(nextFont) =>
                setChoices({ ...choices, [stepId]: nextFont.family })
              }
              sort="popularity"
            />
            <h4 className="apply-font">
              The font will be applied to this text.
            </h4>
          </div>
        )}
        {step < steps.length - 1 ? (
          <NextButton
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              setStep((step) => step + 1);
            }}
            disabled={!choices[stepId]}
          >
            Suivant
          </NextButton>
        ) : (
          <NextButton
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setEnded(true)}
          >
            Terminer
          </NextButton>
        )}
      </Surface>
      <Indicators nbIndicators={steps.length} index={step} />
    </Container>
  );
};

type SummaryProps = {
  choices: Choices;
};

const Summary: React.FC<SummaryProps> = ({ choices }) => {
  return (
    <Container>
      <Surface>
        <Typography
          variant="h2"
          textAlign="center"
          color={colors.secondary.dark}
        >
          Votre site est prêt !
        </Typography>
        <Typography
          variant="h3"
          textAlign="center"
          color={colors.secondary.dark}
        >
          {choices.name}
        </Typography>
        <Typography
          variant="h3"
          textAlign="center"
          color={colors.secondary.dark}
        >
          {choices.logo && <img src={URL.createObjectURL(choices.logo)} />}
        </Typography>
      </Surface>
      <Button variant="contained" color="primary" size="large">
        Visualiser
      </Button>
    </Container>
  );
};

type IndicatorsProps = {
  nbIndicators: number;
  index: number;
};

const Indicators: React.FC<IndicatorsProps> = ({ nbIndicators, index }) => {
  const indicatorArray = [];
  for (let i = 0; i < nbIndicators; i++) {
    indicatorArray.push(i);
  }
  return (
    <IndicatorsContainer>
      {indicatorArray.map((indicator) => {
        return <Indicator key={indicator} active={indicator === index} />;
      })}
    </IndicatorsContainer>
  );
};
const IndicatorsContainer = styled.div`
  margin: auto;
  margin-top: 1.5em;
  width: 60%;
  display: flex;
  justify-content: space-between;
`;
const Indicator = styled.div<{ active: boolean }>`
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? colors.primary.dark : colors.primary.light + "99"};
`;

export default Create1;
