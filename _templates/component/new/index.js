module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { name } = answers;
      const absPath = "components";
      const path = `${absPath}/${name}`;
      return { ...answers, absPath, path };
    });
  },
};
