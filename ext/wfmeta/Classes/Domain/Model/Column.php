<?php
namespace WLWWT\Wfmeta\Domain\Model;

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
 *  the Free Software Foundation; either version 3 of the License, or
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
 *
 *
 * @package wfmeta
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 *
 */
class Column extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity {

	/**
	 * title
	 *
	 * @var \string
	 * @validate NotEmpty
	 */
	protected $title;

	/**
	 * portfolios
	 *
	 * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\WLWWT\Wfmeta\Domain\Model\Portfolio>
	 */
	protected $portfolios;

	/**
	 * systems
	 *
	 * @var \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\WLWWT\Wfmeta\Domain\Model\System>
	 */
	protected $systems;

	/**
	 * contact
	 *
	 * @var \WLWWT\Wfmeta\Domain\Model\Contact
	 */
	protected $contact;

	/**
	 * __construct
	 *
	 * @return Column
	 */
	public function __construct() {
		//Do not remove the next line: It would break the functionality
		$this->initStorageObjects();
	}

	/**
	 * Initializes all ObjectStorage properties.
	 *
	 * @return void
	 */
	protected function initStorageObjects() {
		/**
		 * Do not modify this method!
		 * It will be rewritten on each save in the extension builder
		 * You may modify the constructor of this class instead
		 */
		$this->portfolios = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
		
		$this->systems = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
	}

	/**
	 * Returns the title
	 *
	 * @return \string $title
	 */
	public function getTitle() {
		return $this->title;
	}

	/**
	 * Sets the title
	 *
	 * @param \string $title
	 * @return void
	 */
	public function setTitle($title) {
		$this->title = $title;
	}

	/**
	 * Adds a Portfolio
	 *
	 * @param \WLWWT\Wfmeta\Domain\Model\Portfolio $portfolio
	 * @return void
	 */
	public function addPortfolio(\WLWWT\Wfmeta\Domain\Model\Portfolio $portfolio) {
		$this->portfolios->attach($portfolio);
	}

	/**
	 * Removes a Portfolio
	 *
	 * @param \WLWWT\Wfmeta\Domain\Model\Portfolio $portfolioToRemove The Portfolio to be removed
	 * @return void
	 */
	public function removePortfolio(\WLWWT\Wfmeta\Domain\Model\Portfolio $portfolioToRemove) {
		$this->portfolios->detach($portfolioToRemove);
	}

	/**
	 * Returns the portfolios
	 *
	 * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\WLWWT\Wfmeta\Domain\Model\Portfolio> $portfolios
	 */
	public function getPortfolios() {
		return $this->portfolios;
	}

	/**
	 * Sets the portfolios
	 *
	 * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\WLWWT\Wfmeta\Domain\Model\Portfolio> $portfolios
	 * @return void
	 */
	public function setPortfolios(\TYPO3\CMS\Extbase\Persistence\ObjectStorage $portfolios) {
		$this->portfolios = $portfolios;
	}

	/**
	 * Adds a System
	 *
	 * @param \WLWWT\Wfmeta\Domain\Model\System $system
	 * @return void
	 */
	public function addSystem(\WLWWT\Wfmeta\Domain\Model\System $system) {
		$this->systems->attach($system);
	}

	/**
	 * Removes a System
	 *
	 * @param \WLWWT\Wfmeta\Domain\Model\System $systemToRemove The System to be removed
	 * @return void
	 */
	public function removeSystem(\WLWWT\Wfmeta\Domain\Model\System $systemToRemove) {
		$this->systems->detach($systemToRemove);
	}

	/**
	 * Returns the systems
	 *
	 * @return \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\WLWWT\Wfmeta\Domain\Model\System> $systems
	 */
	public function getSystems() {
		return $this->systems;
	}

	/**
	 * Sets the systems
	 *
	 * @param \TYPO3\CMS\Extbase\Persistence\ObjectStorage<\WLWWT\Wfmeta\Domain\Model\System> $systems
	 * @return void
	 */
	public function setSystems(\TYPO3\CMS\Extbase\Persistence\ObjectStorage $systems) {
		$this->systems = $systems;
	}

	/**
	 * Returns the contact
	 *
	 * @return \WLWWT\Wfmeta\Domain\Model\Contact $contact
	 */
	public function getContact() {
		return $this->contact;
	}

	/**
	 * Sets the contact
	 *
	 * @param \WLWWT\Wfmeta\Domain\Model\Contact $contact
	 * @return void
	 */
	public function setContact(\WLWWT\Wfmeta\Domain\Model\Contact $contact) {
		$this->contact = $contact;
	}

}
?>