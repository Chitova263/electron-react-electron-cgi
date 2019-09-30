import * as React from "react";
import { ipcRenderer } from "electron";

interface IState {
  message: string;
}

export class Dashboard extends React.Component<{}, IState> {
  public state: IState = {
    message: ""
  };

  public componentDidMount(): void {
    ipcRenderer.on("greeting", this.onMessage);
  }

  public componentWillUnmount(): void {
    ipcRenderer.removeAllListeners("greeting");
  }

  public render(): React.ReactNode {
    return <div>
    <h1>HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</h1>
    </div>;
  }

  private onMessage = (event: any, message: string) => {
    this.setState({ message: message });
  };
}
