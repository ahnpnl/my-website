import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

let nop = () => {}

describe('The Button component', () => {

  it(`Renders a primary button when no arguments are passed`, () => {
    const button = renderer.create(
      <Button onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a primary button when type is primary`, () => {
    const button = renderer.create(
      <Button appearance="primary" text="Button" onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a secondary button when type is secondary`, () => {
    const button = renderer.create(
      <Button appearance="secondary" text="Button" onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a success button when type is success`, () => {
    const button = renderer.create(
      <Button appearance="success" text="Button" onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a error button when type is error`, () => {
    const button = renderer.create(
      <Button appearance="error" text="Button" onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a button which has just an icon`, () => {
    const button = renderer.create(
      <Button icon="search" onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a button which has just a xsmall icon`, () => {
    const button = renderer.create(
      <Button icon="search" iconSize="xsmall" onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a button which has just a small icon`, () => {
    const button = renderer.create(
      <Button icon="search" iconSize="small" onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a button which has just a normal icon`, () => {
    const button = renderer.create(
      <Button icon="search" iconSize="normal" onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a button which has just a large icon`, () => {
    const button = renderer.create(
      <Button icon="search" iconSize="large" onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a button which has just a xlarge icon`, () => {
    const button = renderer.create(
      <Button icon="search" iconSize="xlarge" onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a button which has dropdown arrow`, () => {
    const button = renderer.create(
      <Button onClick={nop} hasDropdown={true} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it(`Renders a button which has an icon, text and dropdown arrow`, () => {
    const button = renderer.create(
      <Button icon="search" text="Button" hasDropdown={true} onClick={nop} />
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

})
