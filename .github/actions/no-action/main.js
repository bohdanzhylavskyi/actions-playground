const core = require("@actions/core");

async function run() {
    const myInput = core.getInput('ainput', { required: true });
    core.setOutput("aoutput", `${myInput}-as-output`);
}

run();