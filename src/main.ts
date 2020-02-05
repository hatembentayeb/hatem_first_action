import * as core from '@actions/core'

async function run() {
  try {
    const devops = core.getInput('devops')
    console.log("the definition of devops is :" + devops)
  } catch (error) {
    core.setFailed(error.message)
    
}
}
run()
