import { useState, useRef, useId } from 'react';
import styled from 'styled-components';
import { FiUploadCloud } from "react-icons/fi";

const InnerWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`;
const DragAndDropContainer = styled.div`
position:relative;
margin-inline: auto;
transition: all .3s ease-in-out;
overflow:hidden;
border-radius: 0.5rem;
border:2px solid var(--border-color);
cursor:pointer;
width:100%;
height:auto;
aspect-ratio: 16/9;
max-width: 25rem;
background:var(--form-bg);
text-align:center;
&:focus-within ,&:focus,&.dragging{
    border-color: var(--theme);
}
label{
    position:absolute;
    inset:0;
}
svg{
    font-size:3rem;
    color:var(--theme);
}

`;
const InputFile = styled.input.attrs({ type: 'file' })`
display:none!important;
`;


const DragAndDrop = ({
    accept = 'image/*',
    hoverLabel = 'Click or drag to upload file',
    dropLabel = 'Drop file here',
    onChange,
    ...props
}) => {

    const id = useId();
    let inputRef = useRef(null);
    const [labelText, setLabelText] = useState(hoverLabel);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const stopDefaults = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }
    const dragEvents = {
        onMouseEnter: () => {
            setIsHovering(true)
        },
        onMouseLeave: () => {
            setIsHovering(false)
        },
        onDragEnter: (e) => {
            stopDefaults(e)
            setIsDragging(true)
            setLabelText(dropLabel)
        },
        onDragLeave: (e) => {
            stopDefaults(e)
            setIsDragging(false)
            setLabelText(hoverLabel)
        },
        onDragOver: stopDefaults,
        onDrop: (e) => {
            stopDefaults(e)
            setLabelText(hoverLabel)
            setIsDragging(false);
            e.preventDefault();
            e.stopPropagation();
            props.onDrop(e)
        },
    }

    const handleChange = (event) => {
        onChange(event)
    }


    const handleClick = (event) => {
        stopDefaults(event);
        inputRef.current.click();
    }

    return (
        <>
            <InputFile
                onChange={handleChange}
                accept={accept}
                id={id}
                ref={inputRef}
            />

            <DragAndDropContainer
                htmlFor={id}
                {...dragEvents}
                {...props}
                onClick={handleClick}
                className={((isDragging || isHovering) ? 'dragging ' : ' ') + (props.className || '')}
            >
                <InnerWrapper>

                    {(isDragging || isHovering) ? (

                        <div>
                            <FiUploadCloud />
                            <p>{dropLabel}</p>
                        </div>
                    ) :
                        <div>
                            <FiUploadCloud />
                            <p>{hoverLabel}</p>
                        </div>
                    }
                </InnerWrapper>
            </DragAndDropContainer>
        </>
    )
}

export default DragAndDrop