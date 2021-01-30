export default function getConsole(code: string): string {
  const win = window as any;
  try {
    win.pythonCode = code;
    win.brython();
  } catch (e) {
    console.error(e);
    return e.toString();
  }
  return win.brythonConsole as string;
}
