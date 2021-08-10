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
} from 'semantic-ui-react'


class UploadCard extends Component {

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

        let fileEncoded = await fileLoader();

        fileEncoded = fileEncoded.split(";")

        const fileData = fileEncoded[1].split(",").pop()
        const fileContentType = fileEncoded[0].split(":").pop()

        // Save file
        const file = {
            fileName: fileName,
            fileData: fileData,
            fileContentType: fileContentType,
        }

        this.props.parentSetState({
            [`file${file_id}`]: file
        });
    }

    render() {
        let hiddenInput;

        return (
            <Card centered>
                {/* TODO: image preview when upload */}
                <Button
                    icon="upload"
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
                    <Card.Header>Upload File</Card.Header>
                    <Card.Meta>
                        <span className='date'>.jpg, .png, .pdf</span>
                    </Card.Meta>
                    <Card.Description>
                        Select the file that will appear in your filter.
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default class UploadOptions extends Component {

    render() {
        return (
            <div>
                
                <Grid columns={1} textAlign="center">

                <Button.Group>
                    <Button positive={this.props.filtersQty === 1} onClick={() => this.props.parentSetState({filtersQty: 1})}>1 Filter</Button>
                    <Button.Or />
                    <Button positive={this.props.filtersQty === 2} onClick={() => this.props.parentSetState({filtersQty: 2})}>2 Filters</Button>
                </Button.Group>
                </Grid>

                <Grid stackable columns={this.props.filtersQty || 1 /* Number of filtersQty with a min of 1 (0 is error) */}>
                    {this.props.filtersQty > 0 &&

                        <Grid.Column>
                            <UploadCard
                                parentSetState={this.props.parentSetState}
                                cardID={1}
                            />
                        </Grid.Column>
                    }
                    {this.props.filtersQty === 2 &&
                        <Grid.Column>
                            <UploadCard
                                parentSetState={this.props.parentSetState}
                                cardID={2}
                            />
                        </Grid.Column>
                    }
                </Grid>


            </div>

        )
    }

}