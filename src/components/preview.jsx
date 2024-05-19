export default function Preview (props) {

    return (
        <div className="previewWrap">
            <div className="toolbar" id="toolbar-preview" >Preview</div>
            <div id="preview" dangerouslySetInnerHTML={{__html: props.msg}}></div>
        </div>
    )
}