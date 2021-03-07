import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import axios from 'axios';
import ApiUrl from '../../Config/ApiUrls'

class Uploader extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }
     getUploadParams = () => {
        return { url: ApiUrl.BaseServiceUrl + ApiUrl.UploadProductImageUrl }
    }

     handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta)
    }

     handleSubmit = (files, allFiles) => {
          allFiles.forEach(f => f.remove())
    }


    render() {
        return (
            <div>
                <Dropzone
                    accept="image/*"
                    getUploadParams={this.getUploadParams}
                    onChangeStatus={this.handleChangeStatus}
                    onSubmit={this.handleSubmit}
                    styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
                />
            </div>
        );
    }
}

Uploader.propTypes = {};

export default Uploader;
