import {FunctionComponent} from 'preact';
import { useCallback, useMemo, useRef, useState } from 'preact/hooks';
import {useToggle} from '../hooks';

interface Props {
  sanitized?: boolean;
  isEdit?: boolean;
  id: string;
  title: string;
  description: string;
}

const styles = {
  container: {
    borderRadius: '5%',
    backgroundColor: 'rgba(0,0,0,.7)',
	  color: 'white',
    padding: '5px 10px',
    margin: 0,
		maxWidth: 400
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    margin: 0,
    overflow: 'hidden'
  },
  description: {
    margin: 0,
    marginTop: 10
  },
  button: {
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: '15%',
    borderStyle: 'outset',
    padding: '2px 5px'
  },
  editContainer: {
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'
  }
}

export type InfoElementEvent = 'UPDATE_INFO_ELEMENT' | 'TOGGLE_INFO_ELEMENT' | 'DELETE_INFO_ELEMENT';

const InfoElement: FunctionComponent<Props> = ({title, description, isEdit, sanitized, id}) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  const elementRef = useRef(null);

  const onClickContainer = useCallback(() => {
    if(isOpen === false) {
      toggleIsOpen(true);
      dispatchEvent('TOGGLE_INFO_ELEMENT')
    }
  }, []);

  const contentProps = useMemo(() => {
    let props;

    if(sanitized) {
      props = {
        dangerouslySetInnerHTML: {__html: description}
      }
    } else {
      props = {children: description};
    }

    return props;
  }, [sanitized, description]);

  const dispatchEvent = useCallback((eventName: InfoElementEvent, data?: any) => {
    const event = new CustomEvent(eventName, { bubbles: true, detail: {id, ...data}});
		elementRef.current.dispatchEvent(event);
  }, [elementRef.current, id]);

  const onClickClose = useCallback((e: Event) => {
    e.stopPropagation();
    toggleIsOpen(false);
    dispatchEvent('TOGGLE_INFO_ELEMENT');
  }, [])

  const saveElement = useCallback((e) => {
    e.stopPropagation();
    const container = elementRef.current;
    const title = container.querySelector('h4').textContent;
    const description = container.querySelector('p').textContent;
    toggleIsOpen(false);
    dispatchEvent('UPDATE_INFO_ELEMENT', {title, description});
  }, []);

  return (
    <div ref={elementRef} style={styles.container} onClick={onClickContainer}  >
      <div style={styles.titleContainer}>
        <h4 contentEditable={isOpen && isEdit} style={styles.title} >{title}</h4>  
        {isOpen && <button style={styles.button} onClick={onClickClose}>X</button>}
      </div>
      {<p contentEditable={isEdit} style={{...styles.description, display: isOpen ? 'block' : 'none'}} {...contentProps}></p>}
      {isEdit && isOpen && (
        <div style={styles.editContainer}>
          <button onClick={saveElement} style={styles.button}>
            Guardar
          </button>
          &nbsp;
          <button  onClick={() => dispatchEvent('DELETE_INFO_ELEMENT')} style={styles.button}>
            Borrar
          </button>
        </div>
      )}
    </div>
  )
};

export default InfoElement;