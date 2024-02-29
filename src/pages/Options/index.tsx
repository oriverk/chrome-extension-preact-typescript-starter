import { Fragment, h, render } from 'preact';
import { useEffect, useState } from 'preact/compat';

const Options = () => {
  const [color, setColor] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [like, setLike] = useState<boolean>(false);

  const onChange = (e: any) => {
    setColor(e.target.value);
  };

  const toggle = (e: any) => {
    const checked = !e.state.checked;
    setLike(checked);
  };

  useEffect(() => {
    // Restores select box and checkbox state using the preferences
    // stored in chrome.storage.
    chrome.storage.sync.get(
      {
        favoriteColor: 'red',
        likesColor: true,
      },
      (items) => {
        setColor(items.favoriteColor);
        setLike(items.likesColor);
      },
    );
  }, []);

  const saveOptions = () => {
    // Saves options to chrome.storage.sync.
    chrome.storage.sync.set(
      {
        favoriteColor: color,
        likesColor: like,
      },
      () => {
        // Update status to let user know options were saved.
        setStatus('Options saved.');
        const id = setTimeout(() => {
          setStatus('');
        }, 1000);
        return () => clearTimeout(id);
      },
    );
  };

  return (
    <Fragment>
      <div>
        Favorite color:
        <select value={color} onChange={onChange}>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={like}
            onClick={toggle}
            // onInput={(event) => setLike(event.target.checked)}
          />
          I like colors.
        </label>
      </div>
      <div>{status}</div>
      <button onClick={saveOptions}>Save</button>
    </Fragment>
  );
};

render(<Options />, document.getElementById('root'));
