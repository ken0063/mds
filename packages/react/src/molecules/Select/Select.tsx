import React, {
  createRef,
  FC,
  KeyboardEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import Text from '../../atoms/Text';

export const KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  DOWN_ARROW: 40,
  ESC: 27,
  UP_ARROW: 38,
};

interface SelectOptionProps {
  value: string;
  label: string;
}
interface RenderOptionProps {
  isSelected: boolean;
  options: SelectOptionProps;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectProps {
  optionHandler?: (option: SelectOptionProps, optionIndex: number) => void;
  options?: SelectOptionProps[];
  label?: string;
  renderOption?: (props: RenderOptionProps) => ReactNode;
}

const getPreviousOptionIndex = (
  currentIndex: number | null,
  options: Array<SelectOptionProps>
) => {
  if (currentIndex === null) {
    return 0;
  }

  if (currentIndex === 0) {
    return options.length - 1;
  }

  return currentIndex - 1;
};

const getNextOptionIndex = (
  currentIndex: number | null,
  options: Array<SelectOptionProps>
) => {
  if (currentIndex === null) {
    return 0;
  }

  if (currentIndex === options.length - 1) {
    return 0;
  }

  return currentIndex + 1;
};

const Select: FC<SelectProps> = ({
  options = [],
  label = 'Please select an option',
  optionHandler,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  const [highlightedIndex, setHighlightedIndex] = useState<null | number>(null);
  const labelRef = useRef<HTMLButtonElement>(null);
  const [optionRefs, setOptionRefs] = useState<
    React.RefObject<HTMLLIElement>[]
  >([]);
  const [overlayTop, setOverlayTop] = useState<number>(0);

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  const onOptionSelected = (option: SelectOptionProps, optionIndex: number) => {
    if (optionHandler) {
      optionHandler(option, optionIndex);
    }
    setSelectedIndex(optionIndex);
    setIsOpen(false);
  };

  useEffect(() => {
    setOverlayTop(labelRef.current?.offsetHeight || 0);
  }, []);

  let selectedOption = null;
  if (selectedIndex !== null) {
    selectedOption = options[selectedIndex];
  }

  const highlightOption = (optionIndex: number | null) => {
    setHighlightedIndex(optionIndex);
  };

  const onButtonKeyDown: KeyboardEventHandler = (event) => {
    event.preventDefault();

    if (
      [KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(
        event.keyCode
      )
    ) {
      setIsOpen(true);

      // set focus on the list item
      highlightOption(0);
    }
  };

  useEffect(() => {
    setOptionRefs(options.map((_) => createRef<HTMLLIElement>()));
  }, [options.length]);

  useEffect(() => {
    if (highlightedIndex !== null && isOpen) {
      const ref = optionRefs[highlightedIndex];

      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }, [isOpen, highlightedIndex]);

  const onOptionKeyDown: KeyboardEventHandler = (e) => {
    if (e.keyCode === KEY_CODES.ESC) {
      setIsOpen(false);

      return;
    }

    if (e.keyCode === KEY_CODES.DOWN_ARROW) {
      highlightOption(getNextOptionIndex(highlightedIndex, options));
    }

    if (e.keyCode === KEY_CODES.UP_ARROW) {
      highlightOption(getPreviousOptionIndex(highlightedIndex, options));
    }

    if (e.keyCode === KEY_CODES.ENTER) {
      onOptionSelected(options[highlightedIndex!], highlightedIndex!);
    }
  };

  return (
    <div className="mds-select">
      <button
        ref={labelRef}
        data-testid="mds-select-button"
        className="mds-select__label"
        onClick={handleSelectToggle}
        aria-controls="mds-select-list"
        aria-haspopup={true}
        aria-expanded={isOpen ? true : undefined}
        onKeyDown={onButtonKeyDown}
      >
        <Text>{selectedOption === null ? label : selectedOption?.label}</Text>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          width="1rem"
          height="1rem"
          className={`mds-select__caret ${
            isOpen ? 'mds-select__caret--open' : 'mds-select__caret--close'
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <ul
        role="menu"
        aria-hidden={isOpen ? undefined : false}
        id="mds-select-list"
        className={`mds-select__overlay ${
          isOpen ? 'mds-select__overlay--open' : ''
        }`}
        style={{ top: overlayTop }}
      >
        {options?.map((item, idx) => {
          const isSelected = selectedIndex === idx;
          const isHighlighted = highlightedIndex === idx;
          const ref = optionRefs[idx];
          const renderOptionProps = {
            ref,
            options: item,
            isSelected,
            getOptionRecommendedProps: (overrideProps = {}) => {
              return {
                ref,
                role: 'menuitemradio',
                'aria-label': item?.label,
                'aria-checked': isSelected ? true : undefined,
                onKeyDown: onOptionKeyDown,
                tabIndex: isHighlighted ? -1 : 0,
                onMouseEnter: () => highlightOption(idx),
                onMouseLeave: () => highlightOption(null),
                className: `mds-select__option
                        ${isSelected ? 'mds-select__option--selected' : ''}
                        ${
                          isHighlighted ? 'mds-select__option--highlighted' : ''
                        }
                    `,
                key: item?.value,
                onClick: () => onOptionSelected(item, idx),
                ...overrideProps,
              };
            },
          };
          if (renderOption) {
            return renderOption(renderOptionProps);
          }
          return (
            <li {...renderOptionProps.getOptionRecommendedProps()}>
              <Text>{item?.label}</Text>
              {isSelected && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  width="1rem"
                  height="1rem"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
