const CitySelector = () => {
    const [city, setCity] = useState('');
    const [results, setResults] = useState(null);
  
    const onSearch = () => {
      fetch(
        `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      )
        .then((response) => response.json())
        // update the results
        .then((results) => setResults(results));
    };
  
    return (
      <>
        <Row>
          <Col>
            <h1>Search your city</h1>
          </Col>
        </Row>
  
        <Row>
          <Col xs={4} className="text-center">
            <FormControl
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Button onClick={onSearch}>Check Weather</Button>
          </Col>
        </Row>
      </>
    );
  };