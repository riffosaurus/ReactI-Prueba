import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';

function FormDisabledExample() {
  return (
    <Card className='p-3'>
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Disabled input</Form.Label>
          <Form.Control id="TextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Disabled select menu</Form.Label>
          <Form.Select id="Select">
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="FieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
    </Card>
  );
}

export default FormDisabledExample;