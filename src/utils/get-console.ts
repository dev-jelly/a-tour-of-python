const INIT_CODE = `
from browser import window
window.brythonConsole = '';

def print(msg):
    window.brythonConsole += str(msg) + '\\n'

    
`;

export default function getConsole(code: string): string {
  // @ts-ignore
  window.brythonConsole = "";

  // @ts-ignore
  // eslint-disable-next-line no-eval
  window.eval(__BRYTHON__.python_to_js(INIT_CODE + code));

  // @ts-ignore
  return window.brythonConsole as string;
}
