import React, { useState } from 'react'

import {
    Button,
    Grid,
    Card,
} from 'semantic-ui-react'


const UploadCard = ({ isHidden, fileID, setFile }) => {

    const [fileName, setFileName] = useState(null);

    const handleFileInput = async (event) => {

        const selectedFiles = event.target.files;
        //Check File is not Empty
        if (selectedFiles.length == 0) {
            return;
        }
        // Select the very first file from list
        const fileToLoad = selectedFiles[0];
        const fileName = fileToLoad.name;
        const fileContentType = fileToLoad.type;

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

        const fileData = await fileLoader();

        setFileName(fileName)
        setFile({
            fileData: fileData,
            fileName: fileName,
            fileContentType: fileContentType,
            fileID: fileID,
        })
    }

    let hiddenInput;

    return (
        !(isHidden === false) &&
        <Card centered>
            {/* TODO: image preview when upload */}
            <Button
                icon={fileName ? "check" : "upload"}
                positive={fileName !== null}
                size="massive"
                style={{ height: "200px" }}
                onClick={() => hiddenInput.click()}
            />

            <input
                hidden
                type="file"
                name="file"
                onChange={handleFileInput}
                ref={element => {
                    hiddenInput = element
                }}
                accept=".jpg,.jpeg,.png,.pdf"
            />

            {/* Card Description */}
            <Card.Content>
                <Card.Header>{fileName ? fileName : "Upload File"}</Card.Header>
                <Card.Meta>
                    <span className='date'>{fileName ? "" : ".jpg, .png, .pdf"}</span>
                </Card.Meta>
                <Card.Description>
                    {fileName ? "Click again to select a different file" : "Select the file that will appear in your filter."}

                </Card.Description>
            </Card.Content>
        </Card>
    )
}


export const UploadOptions = ({ isHidden, filtersQty, setFiltersQty, setFile1, setFile2}) => {

    return (
        !(isHidden === false) &&
        <div>

            <Grid columns={1} textAlign="center">

                <Button.Group>
                    <Button positive={filtersQty === 1} onClick={() => setFiltersQty(1)}>1 Filter</Button>
                    <Button.Or />
                    <Button positive={filtersQty === 2} onClick={() => setFiltersQty(2)}>2 Filters</Button>
                </Button.Group>
            </Grid>

            <br />
            <br />

            <Grid stackable columns={filtersQty || 1 /* Number of filtersQty with a min of 1 (0 is error) */}>

                <Grid.Column>
                    <UploadCard
                        isHidden={filtersQty > 0}
                        parentSetState={setFiltersQty}
                        fileID={1}
                        setFile={setFile1}
                    />
                </Grid.Column>

                <Grid.Column>
                    <UploadCard
                        isHidden={filtersQty > 1}
                        parentSetState={setFiltersQty}
                        fileID={2}
                        setFile={setFile2}
                    />
                </Grid.Column>
            </Grid>
        </div>
    )
}
