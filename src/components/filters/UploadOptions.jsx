import React, { Component } from 'react'

import {
    Button,
    Checkbox,
    Form,
    Input,
    Grid,
    Select,
    TextArea,
    Header,
    Card,
    Image,
} from 'semantic-ui-react'


class UploadCard extends Component {

    state = {
        fileName: null,
    }

    constructor(props) {
        super(props)
        this.fileSelected = this.fileSelected.bind(this)
    }

    async fileSelected(event, file_id) {
        const selectedFiles = event.target.files;
        //Check File is not Empty
        if (selectedFiles.length == 0) {
            return;
        }
        // Select the very first file from list
        const fileToLoad = selectedFiles[0];
        const fileName = fileToLoad.name;

        const fileLoader = async () => {
            return new Promise((resolve, reject) => {
                // FileReader function for read the file.
                const fileReader = new FileReader();
                // Onload of file read the file content
                fileReader.onload = event => resolve(event.target.result);
                fileReader.onerrror = reject;
                // Convert data to base64
                fileReader.readAsDataURL(fileToLoad) // or readAsText(file) to get raw content
            })
        }

        const fileEncoded = await fileLoader();

        const fileEncodedSplitted = fileEncoded.split(";")

        const fileData = fileEncodedSplitted[1].split(",").pop()
        const fileContentType = fileEncodedSplitted[0].split(":").pop()

        // Save file
        const file = {
            fileName: fileName,
            fileData: fileData,
            fileContentType: fileContentType,
        }

        this.setState({
            fileName: fileName
        })

        this.props.parentSetState({
            [`file${file_id}`]: file
        });
    }

    render() {
        let hiddenInput;

        return (
            !(this.props.hidden === false) &&
            <Card centered>
                {/* TODO: image preview when upload */}
                <Button
                    icon={this.state.fileName ? "check" : "upload"}
                    positive={this.state.fileName !== null}
                    size="massive"
                    style={{ height: "200px" }}
                    onClick={() => hiddenInput.click()}
                />

                <input
                    hidden
                    type="file"
                    name="file"
                    onChange={(event) => this.fileSelected(event, this.props.cardID)}
                    ref={element => {
                        hiddenInput = element
                    }}
                    accept=".jpg,.jpeg,.png,.pdf"
                />

                {/* Card Description */}
                <Card.Content>
                    <Card.Header>{this.state.fileName ? this.state.fileName : "Upload File"}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{this.state.fileName ? "" : ".jpg, .png, .pdf"}</span>
                    </Card.Meta>
                    <Card.Description>
                        {this.state.fileName ? "Click again to select a different file" : "Select the file that will appear in your filter."}

                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default class UploadOptions extends Component {

    render() {
        return (
            !(this.props.hidden === false) &&
            <div>

                <Grid columns={1} textAlign="center">

                    <Button.Group>
                        <Button positive={this.props.filtersQty === 1} onClick={() => this.props.parentSetState({ filtersQty: 1 })}>1 Filter</Button>
                        <Button.Or />
                        <Button positive={this.props.filtersQty === 2} onClick={() => this.props.parentSetState({ filtersQty: 2 })}>2 Filters</Button>
                    </Button.Group>
                </Grid>

                <Grid stackable columns={this.props.filtersQty || 1 /* Number of filtersQty with a min of 1 (0 is error) */}>

                    <Grid.Column>
                        <UploadCard
                            parentSetState={this.props.parentSetState}
                            cardID={1}
                            hidden={this.props.filtersQty > 0}
                        />
                    </Grid.Column>

                    <Grid.Column>
                        <UploadCard
                            parentSetState={this.props.parentSetState}
                            cardID={2}
                            hidden={this.props.filtersQty === 2}
                        />
                    </Grid.Column>

                </Grid>


            </div>

        )
    }

}