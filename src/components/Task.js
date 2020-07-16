import React from 'react';
import PropTypes from 'prop-types';

/**
 * Use `Task` to highlight key info with a predefined status.
 */
export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
  ...rest
}) {
  console.log('rest', rest, id, title, state)
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
          style={{ textOverflow: 'ellipsis' }}
        />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <a href="/" onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  /* theme object */
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['TASK_PINNED', 'TASK_ARCHIVED', 'TASK_INBOX']),
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};

Task.defaultProps = {
  task: {
    id: 'test',
    title: 'test Title',
    state: 'TASK_INBOX',
  },
};
