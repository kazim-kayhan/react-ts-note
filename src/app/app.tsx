import Button from "components/atoms/button";
import Logos from "components/atoms/logos";
import CopyButton from "components/molecules/copy-button";
import styles from "./app.module.css";

const CONSTANTS = {
  name: "Kazim Kayhan",
  githubProfileLink: "https://github.com/kazim-kayhan",
  githubRepoLink: "https://github.com/kazim-kayhan/react-ts-note",
  copyButtonText: "git clone https://github.com/kazim-kayhan/react-ts-note.git",
};

const App = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.headerTopTitle}>
          <span className={styles.headerTopTitleVital}>Note Taking App</span>
        </h1>
        <p className={styles.headerDescription}>
          Built with:{" "}
          <code className={styles.headerDescriptionCode}>React</code>,{" "}
          <code className={styles.headerDescriptionCode}>TypeScript</code>,{" "}
          <code className={styles.headerDescriptionCode}>Tailwindcss</code>,{" "}
          <code className={styles.headerDescriptionCode}>CSS-Modules</code>,{" "}
          <code className={styles.headerDescriptionCode}>Jest</code>,{" "}
          <code className={styles.headerDescriptionCode}>Husky</code>,{" "}
          <code className={styles.headerDescriptionCode}>Commit-lint</code>,{" "}
          <code className={styles.headerDescriptionCode}>ESLint</code>,{" "}
          <code className={styles.headerDescriptionCode}>Prettier</code> and{" "}
          <code className={styles.headerDescriptionCode}>
            Atomic organization pattern
          </code>{" "}
          for components.
        </p>
        <div className={styles.viteLogoContainer}>
          <Logos.Vite className={styles.viteLogo} />
        </div>
      </header>
      <section className={styles.copy}>
        <div className={styles.copyInner}>
          <a href={CONSTANTS.githubRepoLink} target="_blank" rel="noreferrer">
            <Button>Visit on Github</Button>
          </a>
          <CopyButton text={CONSTANTS.copyButtonText} />
        </div>
      </section>
      <section className={styles.mainSection}>
        <div className="text-white">body</div>
      </section>
      <footer className={styles.footer}>
        <a href={CONSTANTS.githubProfileLink} target="_blank" rel="noreferrer">
          {CONSTANTS.name} @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
};

export default App;
