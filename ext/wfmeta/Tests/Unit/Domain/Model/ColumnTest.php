<?php

namespace WLWWT\Wfmeta\Tests;
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2013 Wolfgang Freund <wolfgang.freund@wlwwt.de>
 *  			
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * Test case for class \WLWWT\Wfmeta\Domain\Model\Column.
 *
 * @version $Id$
 * @copyright Copyright belongs to the respective authors
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 *
 * @package TYPO3
 * @subpackage wlwwt Meta column extension
 *
 * @author Wolfgang Freund <wolfgang.freund@wlwwt.de>
 */
class ColumnTest extends \TYPO3\CMS\Extbase\Tests\Unit\BaseTestCase {
	/**
	 * @var \WLWWT\Wfmeta\Domain\Model\Column
	 */
	protected $fixture;

	public function setUp() {
		$this->fixture = new \WLWWT\Wfmeta\Domain\Model\Column();
	}

	public function tearDown() {
		unset($this->fixture);
	}
	
	
	/**
	 * @test
	 */
	public function getTitleReturnsInitialValueForString() { }

	/**
	 * @test
	 */
	public function setTitleForStringSetsTitle() { 
		$this->fixture->setTitle('Conceived at T3CON10');

		$this->assertSame(
			'Conceived at T3CON10',
			$this->fixture->getTitle()
		);
	}
	
	/**
	 * @test
	 */
	public function getPortfoliosReturnsInitialValueForPortfolio() { 
		$newObjectStorage = new \TYPO3\CMS\Extbase\Persistence\Generic\ObjectStorage();
		$this->assertEquals(
			$newObjectStorage,
			$this->fixture->getPortfolios()
		);
	}

	/**
	 * @test
	 */
	public function setPortfoliosForObjectStorageContainingPortfolioSetsPortfolios() { 
		$portfolio = new \WLWWT\Wfmeta\Domain\Model\Portfolio();
		$objectStorageHoldingExactlyOnePortfolios = new \TYPO3\CMS\Extbase\Persistence\Generic\ObjectStorage();
		$objectStorageHoldingExactlyOnePortfolios->attach($portfolio);
		$this->fixture->setPortfolios($objectStorageHoldingExactlyOnePortfolios);

		$this->assertSame(
			$objectStorageHoldingExactlyOnePortfolios,
			$this->fixture->getPortfolios()
		);
	}
	
	/**
	 * @test
	 */
	public function addPortfolioToObjectStorageHoldingPortfolios() {
		$portfolio = new \WLWWT\Wfmeta\Domain\Model\Portfolio();
		$objectStorageHoldingExactlyOnePortfolio = new \TYPO3\CMS\Extbase\Persistence\Generic\ObjectStorage();
		$objectStorageHoldingExactlyOnePortfolio->attach($portfolio);
		$this->fixture->addPortfolio($portfolio);

		$this->assertEquals(
			$objectStorageHoldingExactlyOnePortfolio,
			$this->fixture->getPortfolios()
		);
	}

	/**
	 * @test
	 */
	public function removePortfolioFromObjectStorageHoldingPortfolios() {
		$portfolio = new \WLWWT\Wfmeta\Domain\Model\Portfolio();
		$localObjectStorage = new \TYPO3\CMS\Extbase\Persistence\Generic\ObjectStorage();
		$localObjectStorage->attach($portfolio);
		$localObjectStorage->detach($portfolio);
		$this->fixture->addPortfolio($portfolio);
		$this->fixture->removePortfolio($portfolio);

		$this->assertEquals(
			$localObjectStorage,
			$this->fixture->getPortfolios()
		);
	}
	
	/**
	 * @test
	 */
	public function getSystemsReturnsInitialValueForSystem() { 
		$newObjectStorage = new \TYPO3\CMS\Extbase\Persistence\Generic\ObjectStorage();
		$this->assertEquals(
			$newObjectStorage,
			$this->fixture->getSystems()
		);
	}

	/**
	 * @test
	 */
	public function setSystemsForObjectStorageContainingSystemSetsSystems() { 
		$system = new \WLWWT\Wfmeta\Domain\Model\System();
		$objectStorageHoldingExactlyOneSystems = new \TYPO3\CMS\Extbase\Persistence\Generic\ObjectStorage();
		$objectStorageHoldingExactlyOneSystems->attach($system);
		$this->fixture->setSystems($objectStorageHoldingExactlyOneSystems);

		$this->assertSame(
			$objectStorageHoldingExactlyOneSystems,
			$this->fixture->getSystems()
		);
	}
	
	/**
	 * @test
	 */
	public function addSystemToObjectStorageHoldingSystems() {
		$system = new \WLWWT\Wfmeta\Domain\Model\System();
		$objectStorageHoldingExactlyOneSystem = new \TYPO3\CMS\Extbase\Persistence\Generic\ObjectStorage();
		$objectStorageHoldingExactlyOneSystem->attach($system);
		$this->fixture->addSystem($system);

		$this->assertEquals(
			$objectStorageHoldingExactlyOneSystem,
			$this->fixture->getSystems()
		);
	}

	/**
	 * @test
	 */
	public function removeSystemFromObjectStorageHoldingSystems() {
		$system = new \WLWWT\Wfmeta\Domain\Model\System();
		$localObjectStorage = new \TYPO3\CMS\Extbase\Persistence\Generic\ObjectStorage();
		$localObjectStorage->attach($system);
		$localObjectStorage->detach($system);
		$this->fixture->addSystem($system);
		$this->fixture->removeSystem($system);

		$this->assertEquals(
			$localObjectStorage,
			$this->fixture->getSystems()
		);
	}
	
	/**
	 * @test
	 */
	public function getContactReturnsInitialValueForContact() { }

	/**
	 * @test
	 */
	public function setContactForContactSetsContact() { }
	
}
?>