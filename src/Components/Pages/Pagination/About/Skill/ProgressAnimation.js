import { useEffect } from "react";

const ProgressAnimation = ({ setHtml, setCss, setJs, setReactJs, setGit }) => {
  useEffect(() => {
    const time = setInterval(() => {
      setHtml((OldProgress) => {
        const diff = Math.floor(Math.random() + 1);
        return Math.min(OldProgress + diff, 90);
      });

      setCss((OldProgress) => {
        const diff = Math.floor(Math.random() + 1);
        return Math.min(OldProgress + diff, 83);
      });
      setJs((OldProgress) => {
        const diff = Math.floor(Math.random() + 1);
        return Math.min(OldProgress + diff, 60);
      });
      setReactJs((OldProgress) => {
        const diff = Math.floor(Math.random() + 1);
        return Math.min(OldProgress + diff, 50);
      });
      setGit((OldProgress) => {
        const diff = Math.floor(Math.random() + 1);
        return Math.min(OldProgress + diff, 40);
      });
    }, 5);
    return () => {
      clearInterval(time);
    };
  });
};
export default ProgressAnimation;
