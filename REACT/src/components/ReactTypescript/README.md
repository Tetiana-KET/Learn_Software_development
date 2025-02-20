react should be set to use typeScript
`npm create-react-app .(or the project name) --template typescript`

## type of a component - children: React.ReactNode;

## event types

`React.MouseEvent<HTMLButtonElement>` - click event
`React.ChangeEvent<HTMLInputElement>` - input change

## Styles as props

type ContainerProps = {
styles: React.CSSProperties
}

<div style={props.styles}></div>
the styles object will be passed some where, when Container in invoked
