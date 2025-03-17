import { useState } from "react";
import { ProgressAnimation, Skill, SkillsSchema } from "../Router";

const Skills = () => {
  const { html, css, js, react, git } = SkillsSchema;
  const [Html, setHtml] = useState(0);
  const [Css, setCss] = useState(0);
  const [Js, setJs] = useState(0);
  const [ReactJs, setReactJs] = useState(0);
  const [Git, setGit] = useState(0);
  return (
    <>
      <ProgressAnimation
        setHtml={setHtml}
        setCss={setCss}
        setJs={setJs}
        setReactJs={setReactJs}
        setGit={setGit}
      />
      <Skill
        name={html.name}
        icon={html.icon}
        color={html.color}
        value={Html}
      />
      <Skill name={css.name} icon={css.icon} color={css.color} value={Css} />
      <Skill name={js.name} icon={js.icon} color={js.color} value={Js} />
      <Skill
        name={react.name}
        icon={react.icon}
        color={react.color}
        value={ReactJs}
      />
      <Skill name={git.name} icon={git.icon} color={git.color} value={Git} />
    </>
  );
};

export default Skills;
