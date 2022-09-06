module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "name",
        message: "Page name",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { name } = answers;
      const absPath = "pages";
      const path = `${absPath}/${name}`;
      return { ...answers, absPath, path };
    });
  },
};
