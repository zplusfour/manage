<h1>Manage, like GNU Make, but with JSON.</h1>

<table>
  <tr>
    <th>File</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>Managefile</td>
    <td>JSON</td>
  </tr>
</table>

The `Managefile` should be like:

```json
{
  "targetname": {
    "cmd": "my command"
  }
}
```

for example:
```json
{
  "build": {
    "cmd": "npm build" // Or any other command
  },
  "run": {
    "cmd": "yarn start" // Or any other command
  }
}
```

**NOTE**: *This project was made to help Windows users to use GNU Make on Windows machines, it is not like GNU Make because of copyright*

Manage is also avaliable for Windows, Linux, and macOS (darwin)